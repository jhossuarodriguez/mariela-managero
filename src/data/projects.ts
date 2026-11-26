import type { Locale } from "@/i18n/content";

export type Country = "us" | "do";

type Service =
	| "maintenance"
	| "branding"
	| "rebranding"
	| "webDesign"
	| "marketing"
	| "saas";

interface ProjectEntry {
	title: string;
	country: Country;
	services: Service[];
	location: Record<Locale, string>;
	/** Captura plana del sitio en /public/images/proyectos/: se muestra dentro de una laptop dibujada. */
	image?: string;
	/** Foto de mockup ya armada (laptop en escena real): se muestra a todo lo ancho, tal cual. Tiene prioridad sobre `image`. */
	mockup?: string;
	url?: string;
}

export interface Project {
	title: string;
	country: Country;
	category: string;
	location: string;
	image?: string;
	mockup?: string;
	url?: string;
}

const serviceLabels: Record<Locale, Record<Service, string>> = {
	es: {
		maintenance: "Mantenimiento web",
		branding: "Branding",
		rebranding: "Rebranding",
		webDesign: "Diseño web",
		marketing: "Marketing digital",
		saas: "Desarrollo de aplicación SaaS",
	},
	en: {
		maintenance: "Website maintenance",
		branding: "Branding",
		rebranding: "Rebranding",
		webDesign: "Web design",
		marketing: "Digital marketing",
		saas: "SaaS app development",
	},
};

const us = (place: string) => ({
	es: `${place}, EE. UU.`,
	en: `${place}, USA`,
});
const rd = (place?: string) => ({
	es: place ? `${place}, República Dominicana` : "República Dominicana",
	en: place ? `${place}, Dominican Republic` : "Dominican Republic",
});

// Para agregar la foto de un cliente: guárdala en /public/images/proyectos/ y añade a su entrada
// `mockup: "/images/proyectos/<archivo>"` (foto de mockup) o `image: ...` (captura plana).
const projects: ProjectEntry[] = [
	// Estados Unidos
	{
		title: "Ricca’s Pizza",
		country: "us",
		services: ["maintenance"],
		location: us("Milford, Delaware"),
		mockup: "/images/proyectos/riccas-pizza-mockup.avif",
		url: "https://www.ricaspizza.com/",
	},
	{
		title: "Maps for Mom",
		country: "us",
		services: ["branding"],
		location: { es: "EE. UU.", en: "USA" },
		mockup: "/images/proyectos/maps-for-mom-mockup.avif",
	},
	{
		title: "All In One Contractor",
		country: "us",
		services: ["branding"],
		location: us("Atlanta, Georgia"),
	},
	{
		title: "PBI Photo",
		country: "us",
		services: ["webDesign", "marketing"],
		location: us("Miami, Florida"),
	},
	// Romano’s va separado de Ricca’s Pizza porque sus mockups se parecen.
	{
		title: "Romano’s Restaurant",
		country: "us",
		services: ["maintenance"],
		location: us("Milford, Delaware"),
		mockup: "/images/proyectos/romanos-restaurant-mockup.avif",
	},
	{
		title: "Mount Dora Social (MDS)",
		country: "us",
		services: ["branding"],
		location: us("Mount Dora, Florida"),
	},
	{
		title: "Embracing Nature",
		country: "us",
		services: ["webDesign", "marketing"],
		location: us("South Carolina"),
	},
	{
		title: "Innovative Remodeling & Design",
		country: "us",
		services: ["webDesign", "marketing"],
		location: us("Milford, Delaware"),
	},
	{
		title: "Divinas Beauty Salon",
		country: "us",
		services: ["branding"],
		location: us("Lawrence, Massachusetts"),
	},
	{
		title: "JAMI & CO Design",
		country: "us",
		services: ["rebranding"],
		location: us("Bucks County, Pennsylvania"),
	},
	// República Dominicana
	{
		title: "Antojitos Dulce y Salado",
		country: "do",
		services: ["rebranding"],
		location: rd("Santo Domingo"),
	},
	{
		title: "Pamela Mieses",
		country: "do",
		services: ["rebranding"],
		location: rd(),
	},
	{
		title: "El Elyon Centro Diagnóstico",
		country: "do",
		services: ["branding", "marketing"],
		location: rd("Santo Domingo Norte"),
	},
	{ title: "CondoHub", country: "do", services: ["saas"], location: rd() },
	{
		title: "Dra. Halley Moya",
		country: "do",
		services: ["rebranding"],
		location: rd("Santo Domingo"),
	},
];

// Orden del carrusel: tres de Estados Unidos y uno de República Dominicana, en ciclo,
// para dar prioridad a los clientes estadounidenses.
const prioritized = (): ProjectEntry[] => {
	const usQueue = projects.filter((project) => project.country === "us");
	const doQueue = projects.filter((project) => project.country === "do");
	const ordered: ProjectEntry[] = [];
	while (usQueue.length > 0 || doQueue.length > 0) {
		ordered.push(...usQueue.splice(0, 3));
		ordered.push(...doQueue.splice(0, 1));
	}
	return ordered;
};

export const getProjects = (locale: Locale): Project[] =>
	prioritized().map(({ services, location, ...rest }) => ({
		...rest,
		category: services
			.map((service) => serviceLabels[locale][service])
			.join(" · "),
		location: location[locale],
	}));
