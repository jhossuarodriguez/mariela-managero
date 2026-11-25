import type { Locale } from "@/i18n/content";

export interface Project {
	title: string;
	category: string;
	/** Captura real del proyecto. Mientras no exista, se muestra un marco con el nombre. */
	image?: string;
	url?: string;
}

// Proyectos tomados del boceto de la nueva home. Faltan las capturas reales:
// guárdalas en /public/images/proyectos/ y añade `image` a cada uno.
const projectsByLocale: Record<Locale, Project[]> = {
	es: [
		{ title: "Embracing Nature", category: "Tienda en línea · Bienestar" },
		{ title: "Arica Pizzas", category: "Sitio web · Restaurante" },
		{ title: "App de servicios", category: "UX/UI · Aplicación móvil" },
	],
	en: [
		{ title: "Embracing Nature", category: "Online store · Wellness" },
		{ title: "Arica Pizzas", category: "Website · Restaurant" },
		{ title: "Services app", category: "UX/UI · Mobile app" },
	],
};

export const getProjects = (locale: Locale) => projectsByLocale[locale];
