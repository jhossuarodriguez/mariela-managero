import type { Locale } from "@/i18n/content";

export interface ProcessStep {
	number: string;
	title: string;
	description: string;
	icon: "message" | "target" | "pencil" | "rocket";
}

const processByLocale: Record<Locale, ProcessStep[]> = {
	es: [
		{
			number: "01",
			title: "Conversamos",
			description:
				"Una primera llamada para entender tu negocio, qué necesitas y qué ya tienes.",
			icon: "message",
		},
		{
			number: "02",
			title: "Documento de requerimientos",
			description:
				"Te entrego por escrito el alcance, las prioridades, los tiempos y el presupuesto.",
			icon: "target",
		},
		{
			number: "03",
			title: "Construcción por entregas",
			description:
				"Trabajo en ciclos cortos y te muestro avances reales para que opines a tiempo.",
			icon: "pencil",
		},
		{
			number: "04",
			title: "Lanzamiento y capacitación",
			description:
				"Publicamos, te enseño a administrarlo y quedo disponible para mantenimiento.",
			icon: "rocket",
		},
	],
	en: [
		{
			number: "01",
			title: "We talk",
			description:
				"A first call to understand your business, what you need and what you already have.",
			icon: "message",
		},
		{
			number: "02",
			title: "Requirements document",
			description:
				"I give you the scope, priorities, timeline and budget in writing.",
			icon: "target",
		},
		{
			number: "03",
			title: "Built in increments",
			description:
				"I work in short cycles and show you real progress so you can weigh in early.",
			icon: "pencil",
		},
		{
			number: "04",
			title: "Launch and training",
			description:
				"We go live, I show you how to manage it and I stay available for maintenance.",
			icon: "rocket",
		},
	],
};

export const getProcessSteps = (locale: Locale) => processByLocale[locale];
