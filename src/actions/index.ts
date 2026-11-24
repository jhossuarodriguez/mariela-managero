import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";
import {
	budgetLabel,
	MARKET_IDS,
	markets,
	PAYMENT_PLAN_IDS,
	paymentPlans,
	resolvePaymentPlan,
	servicePricing,
} from "@/data/pricing";
import { SITE } from "@/data/site";
import { ui } from "@/i18n/content";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Must match the widget's data-action in ContactForm.astro.
const TURNSTILE_ACTION = "contact";
const TURNSTILE_HOSTNAME = new URL(SITE).hostname;
// Nobody fills the form within 3s of opening the page; scripts submit right away.
const MIN_FILL_MS = 3000;

const escapeHtml = (text: string | undefined): string => {
	if (!text) return "";
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
};

export const server = {
	send: defineAction({
		accept: "form",
		input: z.object({
			locale: z.enum(["es", "en"]).default("es"),
			name: z.string().min(1, "El nombre es requerido"),
			email: z.email("Correo electrónico inválido"),
			company: z.string().max(120).optional(),
			phone: z.string().max(40).optional(),
			service: z.enum(
				[
					"branding",
					"web",
					"ecommerce",
					"apps",
					"maintenance",
					"seo",
					"consulting",
				],
				{
					message: "Selecciona un servicio",
				},
			),
			market: z.enum(MARKET_IDS).optional(),
			budget: z.string().max(40).optional(),
			payment: z.enum(PAYMENT_PLAN_IDS).optional(),
			timeline: z.string().max(120).optional(),
			message: z.string().min(1, "El mensaje es requerido"),
			// Honeypot: hidden from people, filled in by bots that complete every field.
			website: z.string().optional(),
			// Milliseconds since the page loaded, added by the form script on submit.
			elapsed: z.number().optional(),
			"cf-turnstile-response": z.string().min(1, "Verificación requerida"),
		}),

		handler: async (input, context) => {
			const {
				locale,
				name,
				email,
				company,
				phone,
				service,
				market,
				budget,
				payment,
				timeline,
				message,
				website,
				elapsed,
				"cf-turnstile-response": turnstileToken,
			} = input;
			const isEnglish = locale === "en";
			const publicError = isEnglish
				? "We couldn't send your request. Please try again."
				: "No pudimos enviar tu solicitud. Inténtalo de nuevo.";

			const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;

			if (!import.meta.env.RESEND_API_KEY || !turnstileSecret) {
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: publicError,
				});
			}

			let clientAddress: string | undefined;
			try {
				clientAddress = context.clientAddress;
			} catch {
				// clientAddress unavailable in this runtime; siteverify works without it
			}

			// Logged for every submission, so spam that still gets through can be traced in the Vercel logs.
			const requestInfo = {
				email,
				ip: clientAddress,
				country: context.request.headers.get("x-vercel-ip-country"),
				userAgent: context.request.headers.get("user-agent"),
			};
			const reject = (reason: string, details?: Record<string, unknown>) => {
				console.warn(`[contact] Rejected: ${reason}`, {
					...requestInfo,
					...details,
				});
				return new ActionError({ code: "BAD_REQUEST", message: publicError });
			};

			if (website) {
				throw reject("honeypot filled");
			}

			if (elapsed === undefined || elapsed < MIN_FILL_MS) {
				throw reject("sent too fast or without the form script", { elapsed });
			}

			const verifyBody = new URLSearchParams({
				secret: turnstileSecret,
				response: turnstileToken,
			});
			if (clientAddress) {
				verifyBody.set("remoteip", clientAddress);
			}

			const verifyResponse = await fetch(
				"https://challenges.cloudflare.com/turnstile/v0/siteverify",
				{ method: "POST", body: verifyBody },
			);
			const verifyResult = (await verifyResponse.json()) as {
				success: boolean;
				hostname?: string;
				action?: string;
				"error-codes"?: string[];
				metadata?: { result_with_testing_key?: boolean };
			};

			if (!verifyResult.success) {
				throw reject("Turnstile verification failed", {
					errorCodes: verifyResult["error-codes"],
				});
			}

			// `success` alone isn't enough: a testing secret accepts any string as a token,
			// and a token solved on another hostname or widget didn't come from this form.
			if (!import.meta.env.DEV) {
				if (verifyResult.metadata?.result_with_testing_key) {
					console.error(
						"[contact] TURNSTILE_SECRET_KEY is a Cloudflare testing key, which accepts any token. Set the widget's real secret key.",
					);
					throw new ActionError({
						code: "INTERNAL_SERVER_ERROR",
						message: publicError,
					});
				}

				if (
					verifyResult.hostname !== TURNSTILE_HOSTNAME ||
					verifyResult.action !== TURNSTILE_ACTION
				) {
					throw reject("Turnstile token from another hostname or action", {
						hostname: verifyResult.hostname,
						action: verifyResult.action,
					});
				}
			}

			const safeName = escapeHtml(name);
			const safeEmail = escapeHtml(email);
			const safeCompany = escapeHtml(company);
			const safePhone = escapeHtml(phone);
			const safeService = escapeHtml(ui[locale].form.services[service]);
			const pricing = servicePricing[service];
			const tier = pricing.tiers.find(({ id }) => id === budget);
			const safeMarket = escapeHtml(market && markets[market].name[locale]);
			const safeBudget = escapeHtml(
				tier && market ? budgetLabel(pricing, tier, market, locale) : budget,
			);
			const safePayment = escapeHtml(
				payment &&
					paymentPlans[resolvePaymentPlan(pricing.payments, payment)].label[
						locale
					],
			);
			const safeTimeline = escapeHtml(timeline);
			const safeMessage = escapeHtml(message);
			const confirmationTitle = isEnglish
				? "We received your request!"
				: "¡Hemos recibido tu solicitud!";
			const confirmationBody = isEnglish
				? "Thank you for telling us about your project.<br /><br />Our team will review the details and get in touch with you as soon as possible.<br /><br /><strong>Meanwhile, we're already thinking about how to bring it to life.</strong>"
				: "Gracias por contarnos sobre tu proyecto.<br /><br />Nuestro equipo revisará los detalles y se pondrá en contacto contigo lo antes posible.<br /><br /><strong>Mientras tanto, ya estamos pensando en cómo hacerlo realidad.</strong>";

			const MESSAGE_CONFIRMATION = `
                <div style="font-family: 'Nunito', Arial, sans-serif; background-color: #f6f1e9; padding: 48px 20px; color: #201e1c;">
                    <div style="max-width: 640px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 20px;">
                            <img
                                src="https://managerord.com/images/logo.png"
                                alt="Managero"
                                style="height: 40px; width: auto; border: 0;"
                            />
                        </div>

                        <div style="background-color: #ffffff; border: 1px solid #e7e0d7; border-radius: 24px; box-shadow: 0 12px 36px rgba(54,43,31,0.06); overflow: hidden;">
                            <div style="height: 6px; background: #f66e00;"></div>
                            <div style="padding: 32px;">
								<h2 style="color: #f66e00; margin: 0 0 16px; font-size: 22px; font-weight: 800;">${confirmationTitle}</h2>
								<p style="color: #69635d; font-size: 15px; line-height: 1.7; margin: 0;">
									${confirmationBody}
                                </p>
                            </div>
                        </div>

                        <p style="text-align: center; color: #69635d; font-size: 12px; margin-top: 18px;">
							© ${new Date().getFullYear()} Managero. ${isEnglish ? "All rights reserved" : "Todos los derechos reservados"}
                        </p>
                    </div>
                </div>
            `;

			const MESSAGE_RECEIVED = `
                <div style="font-family: 'Nunito', Arial, sans-serif; background-color: #f6f1e9; padding: 48px 20px; color: #201e1c;">
                    <div style="max-width: 640px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 20px;">
                            <img
                                src="https://managerord.com/images/logo.png"
                                alt="Managero"
                                style="height: 40px; width: auto; border: 0;"
                            />
                        </div>

                        <div style="background-color: #ffffff; border: 1px solid #e7e0d7; border-radius: 24px; box-shadow: 0 12px 36px rgba(54,43,31,0.06); overflow: hidden;">
                            <div style="height: 6px; background: #f66e00;"></div>
                            <div style="padding: 32px;">
                                <h2 style="color: #f66e00; margin: 0 0 12px; font-size: 20px;">Nueva solicitud de contacto</h2>

                                <p style="color: #69635d; font-size: 14px; margin: 0 0 20px; line-height: 1.6;">
                                    <span style="display: inline-block; padding: 10px 14px; background: #f6f1e9; border: 1px solid #e7e0d7; border-radius: 999px; color: #201e1c; font-weight: 600;">
                                        De: ${safeName} • <a href="mailto:${safeEmail}" style="color: #f66e00; text-decoration: none;">${safeEmail}</a>
                                    </span>
                                </p>

								<table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d; width: 30%;">Servicio:</td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #201e1c; font-weight: 600;">${safeService}</td>
									</tr>
									${safeCompany ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Marca:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safeCompany}</td></tr>` : ""}
									${safePhone ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Teléfono:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safePhone}</td></tr>` : ""}
									${safeMarket ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Mercado:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safeMarket}</td></tr>` : ""}
									${safeBudget ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Presupuesto:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safeBudget}</td></tr>` : ""}
									${safePayment ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Forma de pago:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safePayment}</td></tr>` : ""}
									${safeTimeline ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Inicio:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safeTimeline}</td></tr>` : ""}
                                </table>

                                <div>
                                    <span style="display: block; color: #69635d; font-size: 12px; margin-bottom: 4px;">Mensaje:</span>
                                    <div style="color: #201e1c; background: #f6f1e9; padding: 12px; border-radius: 10px; border: 1px solid #e7e0d7; white-space: pre-wrap;">${safeMessage}</div>
                                </div>
                            </div>
                        </div>

                        <p style="text-align: center; color: #69635d; font-size: 12px; margin-top: 18px;">
							© ${new Date().getFullYear()} Managero. Todos los derechos reservados
                        </p>
                    </div>
                </div>
            `;

			try {
				const data = await Promise.all([
					resend.emails.send({
						from: "Managero <hello@managerord.com>",
						to: "marias@managerord.com",
						subject: `Nueva solicitud de contacto: ${safeName}`,
						html: MESSAGE_RECEIVED,
					}),

					resend.emails.send({
						from: "Managero <hello@managerord.com>",
						to: email,
						subject: isEnglish
							? "We received your request"
							: "Hemos recibido tu solicitud",
						html: MESSAGE_CONFIRMATION,
					}),
				]);

				const [adminEmail, userEmail] = data;

				if (adminEmail.error || userEmail.error) {
					throw new ActionError({
						code: "INTERNAL_SERVER_ERROR",
						message: publicError,
					});
				}

				console.info("[contact] Sent", requestInfo);

				return {
					success: true,
					message: isEnglish
						? "Request sent successfully. We'll be in touch soon."
						: "Solicitud enviada correctamente. Nos pondremos en contacto pronto.",
				};
			} catch (error) {
				if (error instanceof ActionError) {
					throw error;
				}

				console.error("Email sending error:", error);

				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: publicError,
				});
			}
		},
	}),
};
