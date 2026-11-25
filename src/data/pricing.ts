import type { Locale, ui } from "@/i18n/content";

export type ContactServiceId = keyof (typeof ui)["es"]["form"]["services"];

export const MARKET_IDS = ["do", "us"] as const;
export type MarketId = (typeof MARKET_IDS)[number];

export const PAYMENT_PLAN_IDS = ["split", "single"] as const;
export type PaymentPlanId = (typeof PAYMENT_PLAN_IDS)[number];
type PaymentPlanIds = readonly [PaymentPlanId, ...PaymentPlanId[]];

type Localized = Record<Locale, string>;

// Without `max` the range is open-ended: "RD$70,000+".
type PriceRange = readonly [min: number, max?: number];

export interface PriceTier {
	id: string;
	label: Localized;
	price: Record<MarketId, PriceRange>;
}

export interface ServicePricing {
	monthly?: boolean;
	payments: PaymentPlanIds;
	note?: Localized;
	tiers: readonly PriceTier[];
}

interface PaymentPlan {
	label: Localized;
	installments: readonly { share: number; label: Localized }[];
}

export const markets: Record<MarketId, { symbol: string; name: Localized }> = {
	do: {
		symbol: "RD$",
		name: { es: "República Dominicana", en: "Dominican Republic" },
	},
	us: {
		symbol: "US$",
		name: { es: "Estados Unidos", en: "United States" },
	},
};

export const paymentPlans: Record<PaymentPlanId, PaymentPlan> = {
	split: {
		label: {
			es: "50% al iniciar y 50% al finalizar",
			en: "50% upfront, 50% on completion",
		},
		installments: [
			{ share: 0.5, label: { es: "Al iniciar", en: "Upfront" } },
			{ share: 0.5, label: { es: "Al finalizar", en: "On completion" } },
		],
	},
	single: {
		label: { es: "Un solo pago", en: "Single payment" },
		installments: [
			{ share: 1, label: { es: "Pago único", en: "Single payment" } },
		],
	},
};

// Orientative ranges per market, reviewed in September 2026: "do" follows
// Dominican agency rates in RD$ and "us" follows US rates in US$.
export const servicePricing: Record<ContactServiceId, ServicePricing> = {
	branding: {
		payments: ["split", "single"],
		tiers: [
			{
				id: "logo",
				label: { es: "Logotipo esencial", en: "Essential logo" },
				price: { do: [12_000, 20_000], us: [500, 1_200] },
			},
			{
				id: "identity",
				label: { es: "Identidad visual completa", en: "Full visual identity" },
				price: { do: [25_000, 50_000], us: [1_500, 3_500] },
			},
			{
				id: "complete",
				label: { es: "Branding integral", en: "Complete branding" },
				price: { do: [60_000], us: [4_000] },
			},
		],
	},
	web: {
		payments: ["split", "single"],
		tiers: [
			{
				id: "landing",
				label: { es: "Landing page", en: "Landing page" },
				price: { do: [15_000, 25_000], us: [800, 1_500] },
			},
			{
				id: "corporate",
				label: { es: "Sitio web corporativo", en: "Corporate website" },
				price: { do: [35_000, 60_000], us: [2_000, 4_500] },
			},
			{
				id: "advanced",
				label: {
					es: "Sitio avanzado o a medida",
					en: "Advanced or custom-coded site",
				},
				price: { do: [70_000], us: [5_000] },
			},
		],
	},

	ecommerce: {
		payments: ["split", "single"],
		tiers: [
			{
				id: "starter",
				label: { es: "Tienda inicial", en: "Starter store" },
				price: { do: [70_000, 120_000], us: [5_000, 8_000] },
			},
			{
				id: "growth",
				label: {
					es: "Tienda con integraciones",
					en: "Store with integrations",
				},
				price: { do: [120_000, 200_000], us: [8_000, 12_000] },
			},
			{
				id: "custom",
				label: { es: "Comercio a medida", en: "Custom commerce" },
				price: { do: [200_000], us: [12_000] },
			},
		],
	},
	apps: {
		payments: ["split", "single"],
		tiers: [
			{
				id: "mvp",
				label: { es: "Sistema web o MVP", en: "Web system or MVP" },
				price: { do: [120_000, 250_000], us: [4_000, 10_000] },
			},
			{
				id: "mobile",
				label: { es: "App móvil iOS y Android", en: "iOS and Android app" },
				price: { do: [250_000, 500_000], us: [10_000, 25_000] },
			},
			{
				id: "platform",
				label: { es: "Plataforma a medida", en: "Custom platform" },
				price: { do: [500_000], us: [25_000] },
			},
		],
	},

	maintenance: {
		monthly: true,
		payments: ["split", "single"],
		tiers: [
			{
				id: "basic",
				label: { es: "Plan básico", en: "Basic plan" },
				price: { do: [3_000, 5_000], us: [80, 150] },
			},
			{
				id: "support",
				label: {
					es: "Plan con soporte y cambios",
					en: "Support and changes plan",
				},
				price: { do: [5_000, 10_000], us: [150, 300] },
			},
			{
				id: "platform",
				label: { es: "Tienda o plataforma", en: "Store or platform" },
				price: { do: [10_000], us: [300] },
			},
		],
	},
	seo: {
		monthly: true,
		payments: ["split", "single"],
		tiers: [
			{
				id: "local",
				label: { es: "SEO local", en: "Local SEO" },
				price: { do: [10_000, 20_000], us: [500, 1_000] },
			},
			{
				id: "growth",
				label: {
					es: "SEO técnico y de contenido",
					en: "Technical and content SEO",
				},
				price: { do: [20_000, 40_000], us: [1_000, 2_500] },
			},
			{
				id: "competitive",
				label: { es: "Sector competitivo", en: "Competitive sector" },
				price: { do: [40_000], us: [2_500] },
			},
		],
	},

	consulting: {
		payments: ["single"],
		tiers: [
			{
				id: "session",
				label: { es: "Sesión de asesoría", en: "Advisory session" },
				price: { do: [5_000, 8_000], us: [200, 400] },
			},
			{
				id: "assessment",
				label: { es: "Diagnóstico con informe", en: "Assessment with report" },
				price: { do: [15_000, 30_000], us: [800, 1_800] },
			},
			{
				id: "roadmap",
				label: { es: "Hoja de ruta completa", en: "Full roadmap" },
				price: { do: [30_000], us: [1_800] },
			},
		],
	},
};

const PER_MONTH: Localized = { es: "/mes", en: "/mo" };

const formatAmount = (value: number, market: MarketId) =>
	`${markets[market].symbol}${Math.round(value).toLocaleString("en-US")}`;

export const formatPrice = (
	[min, max]: PriceRange,
	market: MarketId,
	locale: Locale,
	{ monthly = false, share = 1 }: { monthly?: boolean; share?: number } = {},
) => {
	const low = formatAmount(min * share, market);
	const range =
		max === undefined
			? `${low}+`
			: `${low} – ${formatAmount(max * share, market)}`;
	return monthly ? `${range}${PER_MONTH[locale]}` : range;
};

export const budgetLabel = (
	pricing: ServicePricing,
	tier: PriceTier,
	market: MarketId,
	locale: Locale,
) =>
	`${formatPrice(tier.price[market], market, locale, { monthly: pricing.monthly })} · ${tier.label[locale]}`;

export const resolvePaymentPlan = (
	plans: PaymentPlanIds,
	plan?: string,
): PaymentPlanId => plans.find((id) => id === plan) ?? plans[0];

export const isContactService = (value: string): value is ContactServiceId =>
	Object.hasOwn(servicePricing, value);
