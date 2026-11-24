import type { Locale } from "@/i18n/content";

export type ServiceId =
	| "branding"
	| "web"
	| "apps"
	| "ecommerce"
	| "maintenance"
	| "seo"
	| "consulting";

export interface ServiceDetailBlock {
	title: string;
	text: string;
}

export interface LocalizedService {
	slug: string;
	title: string;
	h1: string;
	seoTitle: string;
	description: string;
	seoDescription: string;
	intro: string;
	capabilities: string[];
	details: ServiceDetailBlock[];
	imageAlt: string;
}

export interface Service {
	id: ServiceId;
	featured: boolean;
	image: string;
	imageWidth: number;
	imageHeight: number;
	cardImage: string;
	ogImage: string;
	class?: string;
	overlay?: boolean;
	locales: Record<Locale, LocalizedService>;
}

export const services: Service[] = [
	{
		id: "branding",
		featured: false,
		image: "/images/02-identidad-visual.avif",
		imageWidth: 1122,
		imageHeight: 1402,
		cardImage: "/images/mockups/sudadera_divinas_beauty_salon.avif",
		ogImage: "/images/og/branding.jpg",
		class: "text-white",
		overlay: true,
		locales: {
			es: {
				slug: "branding",
				title: "Branding",
				h1: "Branding e identidad de marca",
				seoTitle: "Branding e identidad de marca en Santo Domingo | Managero",
				description:
					"Logotipo, colores y sistema visual para que tu marca se reconozca en todas partes.",
				seoDescription:
					"Agencia de branding en Santo Domingo: estrategia, naming, sistema visual y manual de marca para identidades coherentes. Conversemos con Managero.",
				intro:
					"Una marca no es solo un logo. Definimos qué dice, cómo se ve y cómo suena, para que se reconozca igual en una tarjeta, en una tienda o en una pantalla.",
				capabilities: [
					"Estrategia y posicionamiento de marca",
					"Naming y arquitectura de marca",
					"Diseño de logotipo y sistema visual",
					"Paleta cromática, tipografía e iconografía",
					"Manual de marca y guías de uso",
					"Aplicaciones en papelería, empaque y digital",
				],
				details: [
					{
						title: "Empezamos por la estrategia",
						text: "Antes de dibujar nada entendemos a quién le hablas, contra quién compites y qué te hace distinto en tu mercado. Esa base define el territorio visual y evita rediseños costosos seis meses después.",
					},
					{
						title: "Un sistema, no una pieza suelta",
						text: "Entregamos el sistema visual completo: logotipo y sus variantes, colores, tipografías, iconos y reglas de uso. Tu equipo puede crear piezas nuevas sin perder coherencia ni depender de nosotros para cada publicación.",
					},
					{
						title: "Probado en el mundo real",
						text: "Aplicamos la identidad donde va a vivir: rótulos, empaques, redes sociales, uniformes, facturas y tu sitio web. Si algo no funciona a tamaño pequeño o en blanco y negro, lo ajustamos antes de entregar.",
					},
				],
				imageAlt:
					"Sistema de identidad visual aplicado en papelería y empaques de marca",
			},
			en: {
				slug: "branding",
				title: "Branding",
				h1: "Branding and brand identity",
				seoTitle: "Branding and brand identity in Santo Domingo | Managero",
				description:
					"Logo, colors and a visual system so your brand is recognizable everywhere.",
				seoDescription:
					"Branding agency in Santo Domingo: strategy, naming, visual system and brand guidelines for coherent identities. Let's talk with Managero.",
				intro:
					"A brand is more than a logo. We define what it says, how it looks and how it sounds, so it is recognizable on a business card, in a store or on a screen.",
				capabilities: [
					"Brand strategy and positioning",
					"Naming and brand architecture",
					"Logo design and visual system",
					"Color palette, typography and iconography",
					"Brand guidelines and usage rules",
					"Stationery, packaging and digital applications",
				],
				details: [
					{
						title: "Strategy comes first",
						text: "Before drawing anything we map who you are talking to, who you compete against and what makes you different in your market. That foundation defines the visual territory and prevents costly redesigns six months later.",
					},
					{
						title: "A system, not a single piece",
						text: "You get the complete visual system: logo and its variants, colors, typefaces, icons and usage rules. Your team can create new pieces without losing consistency or depending on us for every post.",
					},
					{
						title: "Tested in the real world",
						text: "We apply the identity where it will live: signage, packaging, social media, uniforms, invoices and your website. If something breaks at small sizes or in black and white, we fix it before delivery.",
					},
				],
				imageAlt:
					"Visual identity system applied to brand stationery and packaging",
			},
		},
	},
	{
		id: "web",
		featured: true,
		image: "/images/03-diseno-web.avif",
		imageWidth: 1003,
		imageHeight: 1568,
		cardImage: "/images/mockups/laptop_flotante_condo_hub.avif",
		ogImage: "/images/og/web.jpg",
		class: "text-white",
		overlay: true,
		locales: {
			es: {
				slug: "diseno-web",
				title: "Diseño y desarrollo web",
				h1: "Diseño y desarrollo web en WordPress y código a medida",
				seoTitle: "Diseño web a medida en República Dominicana | Managero",
				description:
					"Sitios en WordPress o en código a medida, rápidos y fáciles de administrar.",
				seoDescription:
					"Diseño web a medida en República Dominicana: sitios rápidos, responsivos y pensados para convertir visitas en clientes. Conversemos con Managero.",
				intro:
					"Diseñamos el sitio alrededor de lo que tu negocio necesita que pase: que te escriban, que te llamen, que compren. Todo lo demás está al servicio de eso.",
				capabilities: [
					"Arquitectura de información y wireframes",
					"Diseño de interfaz a medida",
					"Maquetación responsiva para móvil y escritorio",
					"Optimización de velocidad y Core Web Vitals",
					"SEO técnico y metadatos desde el día uno",
					"Capacitación para que administres el contenido",
				],
				details: [
					{
						title: "Primero móvil, siempre",
						text: "La mayor parte del tráfico llega desde el celular. Diseñamos y probamos primero en pantallas pequeñas y después escalamos a escritorio, nunca al revés.",
					},
					{
						title: "Rápido no es un extra",
						text: "Un sitio lento pierde visitas antes de terminar de cargar. Trabajamos con imágenes optimizadas, tipografías controladas y el mínimo JavaScript necesario para que las páginas abran rápido incluso con conexión móvil irregular.",
					},
					{
						title: "Pensado para que te encuentren",
						text: "Cada página sale con su título, su descripción, su estructura de encabezados y sus datos estructurados en orden. No es un añadido posterior: viene desde la primera maqueta.",
					},
				],
				imageAlt: "Diseño de un sitio web responsivo en escritorio y móvil",
			},
			en: {
				slug: "web-design",
				title: "Web design and development",
				h1: "Web design and development in WordPress and custom code",
				seoTitle: "Custom web design in the Dominican Republic | Managero",
				description:
					"WordPress or custom-coded sites, fast and easy to manage.",
				seoDescription:
					"Custom web design in the Dominican Republic: fast, responsive sites built to turn visits into customers. Let's talk with Managero.",
				intro:
					"We design the site around what your business needs to happen: that people write, call or buy. Everything else exists to serve that.",
				capabilities: [
					"Information architecture and wireframes",
					"Custom interface design",
					"Responsive layout for mobile and desktop",
					"Speed and Core Web Vitals optimization",
					"Technical SEO and metadata from day one",
					"Training so you can manage the content",
				],
				details: [
					{
						title: "Mobile first, always",
						text: "Most traffic arrives from a phone. We design and test on small screens first and then scale up to desktop, never the other way around.",
					},
					{
						title: "Fast is not an extra",
						text: "A slow site loses visitors before it finishes loading. We work with optimized images, controlled typefaces and the minimum JavaScript required so pages open quickly even on an unstable mobile connection.",
					},
					{
						title: "Built to be found",
						text: "Every page ships with its title, description, heading structure and structured data in order. It is not bolted on afterwards: it starts with the first wireframe.",
					},
				],
				imageAlt: "Responsive website design shown on desktop and mobile",
			},
		},
	},
	{
		id: "ecommerce",
		featured: true,
		image: "/images/03-diseno-web.avif",
		imageWidth: 1003,
		imageHeight: 1568,
		cardImage: "/images/mockups/laptop_flotante_condo_hub.avif",
		ogImage: "/images/og/web.jpg",
		locales: {
			es: {
				slug: "tiendas-en-linea",
				title: "Tiendas en línea",
				h1: "Tiendas en línea con Shopify y WooCommerce",
				seoTitle: "Tiendas en línea con Shopify y WooCommerce en RD | Managero",
				description:
					"Tiendas en Shopify o WooCommerce, con pagos, envíos e inventario listos para vender.",
				seoDescription:
					"Creo tiendas en línea con Shopify y WooCommerce en República Dominicana: catálogo, pagos, envíos e inventario configurados para vender desde el primer día.",
				intro:
					"Te ayudo a elegir entre Shopify y WooCommerce según cómo vendes hoy, y dejo la tienda lista para recibir pedidos: catálogo, pagos, envíos y correos.",
				capabilities: [
					"Tiendas en Shopify y WooCommerce",
					"Carga y organización del catálogo",
					"Pasarelas de pago locales e internacionales",
					"Zonas y tarifas de envío",
					"Inventario y correos de pedido",
					"Capacitación para administrar pedidos y productos",
				],
				details: [
					{
						title: "La plataforma según tu negocio",
						text: "Shopify es ideal si quieres algo estable sin pensar en servidores. WooCommerce conviene si ya tienes WordPress o necesitas más control. Te explico la diferencia con tus números, no con teoría.",
					},
					{
						title: "Lista para vender, no solo bonita",
						text: "Antes de publicar pruebo una compra completa: pago, correo de confirmación, envío y cómo se ve el pedido del lado de la administración.",
					},
					{
						title: "Tú quedas a cargo",
						text: "Al final te enseño a subir productos, cambiar precios y despachar pedidos sin depender de mí para lo del día a día.",
					},
				],
				imageAlt: "Tienda en línea vista en escritorio y móvil",
			},
			en: {
				slug: "online-stores",
				title: "Online stores",
				h1: "Online stores with Shopify and WooCommerce",
				seoTitle:
					"Online stores with Shopify and WooCommerce in the DR | Managero",
				description:
					"Shopify or WooCommerce stores with payments, shipping and inventory ready to sell.",
				seoDescription:
					"I build online stores with Shopify and WooCommerce in the Dominican Republic: catalog, payments, shipping and inventory set up to sell from day one.",
				intro:
					"I help you choose between Shopify and WooCommerce based on how you sell today, and leave the store ready to take orders: catalog, payments, shipping and emails.",
				capabilities: [
					"Shopify and WooCommerce stores",
					"Catalog setup and organization",
					"Local and international payment gateways",
					"Shipping zones and rates",
					"Inventory and order emails",
					"Training to manage orders and products",
				],
				details: [
					{
						title: "The platform that fits your business",
						text: "Shopify is ideal if you want something stable without thinking about servers. WooCommerce makes sense if you already have WordPress or need more control. I explain the difference with your numbers, not theory.",
					},
					{
						title: "Ready to sell, not just pretty",
						text: "Before launch I test a full purchase: payment, confirmation email, shipping and how the order looks on the admin side.",
					},
					{
						title: "You stay in charge",
						text: "At the end I show you how to add products, change prices and ship orders without depending on me for day-to-day work.",
					},
				],
				imageAlt: "Online store shown on desktop and mobile",
			},
		},
	},
	{
		id: "apps",
		featured: true,
		image: "/images/05-apps-sistemas.avif",
		imageWidth: 1122,
		imageHeight: 1402,
		cardImage: "/images/mockups/pantallas_aplicacion_reciclaje.avif",
		ogImage: "/images/og/apps.jpg",
		class: "text-white",
		overlay: true,
		locales: {
			es: {
				slug: "apps",
				title: "Apps y sistemas",
				h1: "Desarrollo de apps móviles y web a medida",
				seoTitle: "Desarrollo de apps móviles y web en RD | Managero",
				description:
					"Apps móviles y plataformas a medida, construidas para escalar.",
				seoDescription:
					"Desarrollo de apps móviles y web a medida en República Dominicana: producto, integraciones y plataformas que escalan, junto a Managero.",
				intro:
					"Cuando el proceso ya no cabe en una hoja de cálculo ni en una plantilla, construimos la app: móvil, web o las dos, alrededor de lo que tu operación necesita resolver.",
				capabilities: [
					"Apps móviles para iOS y Android",
					"Aplicaciones y plataformas web a medida",
					"Integraciones con APIs y servicios externos",
					"Paneles de administración y reportes",
					"Publicación en App Store y Google Play",
					"Despliegue, monitoreo y mantenimiento",
				],
				details: [
					{
						title: "Empezamos por el proceso, no por el código",
						text: "Antes de elegir tecnología mapeamos cómo trabaja hoy tu equipo y dónde se pierde el tiempo. Una app solo vale la pena si elimina trabajo manual real.",
					},
					{
						title: "Móvil y web, una sola marca",
						text: "La app hereda el sistema visual de tu identidad, así que se siente parte de la marca y no un producto aparte. Cuando el proyecto lo permite, trabajamos móvil y web sobre una base compartida.",
					},
					{
						title: "Entregas por partes",
						text: "Trabajamos en versiones cortas y funcionales para que pruebes la app con usuarios reales desde las primeras semanas y puedas corregir el rumbo antes de que sea caro hacerlo.",
					},
				],
				imageAlt: "Pantallas de una aplicación móvil desarrollada por Managero",
			},
			en: {
				slug: "apps",
				title: "Apps and systems",
				h1: "Custom mobile and web app development",
				seoTitle: "Mobile and web app development in the DR | Managero",
				description: "Custom mobile apps and platforms built to scale.",
				seoDescription:
					"Custom mobile and web app development in the Dominican Republic: product, integrations and platforms that scale, with Managero.",
				intro:
					"When the process no longer fits in a spreadsheet or a template, we build the app: mobile, web or both, around what your operation actually needs to solve.",
				capabilities: [
					"Mobile apps for iOS and Android",
					"Custom web applications and platforms",
					"API and third-party service integrations",
					"Admin dashboards and reporting",
					"App Store and Google Play publishing",
					"Deployment, monitoring and maintenance",
				],
				details: [
					{
						title: "We start with the process, not the code",
						text: "Before choosing any technology we map how your team works today and where time is lost. An app is only worth it if it removes real manual work.",
					},
					{
						title: "Mobile and web, one brand",
						text: "The app inherits the visual system from your identity, so it feels like part of the brand rather than a separate product. Where the project allows, we build mobile and web on a shared base.",
					},
					{
						title: "Delivered in increments",
						text: "We work in short, functional releases so you can test the app with real users from the first weeks and correct course before it gets expensive.",
					},
				],
				imageAlt: "Screens from a mobile application developed by Managero",
			},
		},
	},
	{
		id: "maintenance",
		featured: false,
		image: "/images/07-mantenimiento-web.avif",
		imageWidth: 1499,
		imageHeight: 1000,
		cardImage: "/images/mockups/laptop_flotante_condo_hub.avif",
		ogImage: "/images/og/maintenance.jpg",
		locales: {
			es: {
				slug: "mantenimiento-web",
				title: "Mantenimiento web",
				h1: "Mantenimiento web y soporte técnico continuo",
				seoTitle: "Mantenimiento web y soporte técnico en RD | Managero",
				description:
					"Cuido tu sitio para que se mantenga seguro, actualizado y funcionando.",
				seoDescription:
					"Mantenimiento web en República Dominicana para mantener tu sitio seguro, actualizado, rápido y disponible, con soporte técnico continuo de Managero.",
				intro:
					"Un sitio web necesita atención después de publicarse. Nos ocupamos de su salud técnica para que tu equipo pueda concentrarse en el negocio.",
				capabilities: [
					"Actualizaciones técnicas y de contenido",
					"Monitoreo de funcionamiento y seguridad",
					"Copias de seguridad y plan de recuperación",
					"Corrección de errores y soporte continuo",
					"Optimización periódica de rendimiento",
					"Reporte mensual del estado del sitio",
				],
				details: [
					{
						title: "Un sitio no se termina el día que se publica",
						text: "Las dependencias se desactualizan, los certificados vencen y los formularios dejan de enviar sin avisar. Revisamos todo eso de forma periódica para que no te enteres por un cliente.",
					},
					{
						title: "Seguridad antes del incidente",
						text: "Mantenemos las dependencias al día, vigilamos los accesos y guardamos copias verificadas. Recuperar un sitio caído cuesta bastante más que prevenirlo.",
					},
					{
						title: "Siempre sabes qué se hizo",
						text: "Cada mes recibes un reporte con lo que se actualizó, lo que se corrigió y lo que recomendamos atender, sin lenguaje técnico innecesario.",
					},
				],
				imageAlt: "Sitio web administrado desde una computadora portátil",
			},
			en: {
				slug: "web-maintenance",
				title: "Web maintenance",
				h1: "Web maintenance and ongoing technical support",
				seoTitle: "Web maintenance and technical support in the DR | Managero",
				description: "I keep your website secure, up to date and running.",
				seoDescription:
					"Web maintenance in the Dominican Republic to keep your site secure, updated, fast and available, with ongoing technical support from Managero.",
				intro:
					"A website needs attention after launch. We take care of its technical health so your team can stay focused on the business.",
				capabilities: [
					"Technical and content updates",
					"Performance and security monitoring",
					"Backups and a recovery plan",
					"Bug fixes and ongoing support",
					"Recurring speed optimization",
					"Monthly site health report",
				],
				details: [
					{
						title: "A site is not finished on launch day",
						text: "Dependencies fall behind, certificates expire and forms stop sending without warning. We check all of it on a schedule so you never hear about it from a client first.",
					},
					{
						title: "Security before the incident",
						text: "We keep dependencies current, watch access and store verified backups. Recovering a site that is already down costs considerably more than preventing it.",
					},
					{
						title: "You always know what was done",
						text: "Every month you get a report covering what was updated, what was fixed and what we recommend addressing, without unnecessary technical language.",
					},
				],
				imageAlt: "Website managed from a laptop computer",
			},
		},
	},
	{
		id: "seo",
		featured: false,
		image: "/images/08-seo-optimizacion.avif",
		imageWidth: 1500,
		imageHeight: 1000,
		cardImage: "/images/mockups/laptop_y_movil_plataformas.avif",
		ogImage: "/images/og/seo.jpg",
		locales: {
			es: {
				slug: "seo-optimizacion",
				title: "SEO y optimización",
				h1: "SEO y optimización web",
				seoTitle: "SEO y optimización web en República Dominicana | Managero",
				description:
					"Mejoro tu visibilidad en buscadores con SEO técnico, velocidad y buena estructura.",
				seoDescription:
					"SEO en República Dominicana: auditoría técnica, investigación de búsquedas y optimización on-page para mejorar tu visibilidad orgánica con Managero.",
				intro:
					"Alineamos contenido, estructura y rendimiento técnico para que buscadores y personas entiendan mejor el valor de tu sitio.",
				capabilities: [
					"Auditoría SEO técnica y de contenido",
					"Investigación de búsquedas y competencia",
					"Optimización on-page, metadatos y encabezados",
					"SEO local y perfil de Google Business",
					"Core Web Vitals y velocidad de carga",
					"Medición en Search Console y reportes",
				],
				details: [
					{
						title: "Primero lo técnico",
						text: "Si Google no puede rastrear, entender o cargar tu sitio, ningún contenido lo va a salvar. Arrancamos por indexación, estructura, velocidad y datos estructurados.",
					},
					{
						title: "Búsquedas con intención real",
						text: "Priorizamos las búsquedas con intención de compra de tu mercado real, antes que términos genéricos donde compites contra medio continente.",
					},
					{
						title: "Resultados que puedes verificar",
						text: "Dejamos Search Console y la analítica configuradas, con un punto de partida medido, para que puedas comprobar tú mismo qué cambió y cuándo.",
					},
				],
				imageAlt: "Análisis de posicionamiento y optimización de un sitio web",
			},
			en: {
				slug: "seo-optimization",
				title: "SEO and optimization",
				h1: "SEO and web optimization",
				seoTitle:
					"SEO and web optimization in the Dominican Republic | Managero",
				description:
					"I improve your search visibility with technical SEO, speed and solid structure.",
				seoDescription:
					"SEO in the Dominican Republic: technical audit, keyword research and on-page optimization to improve your organic visibility with Managero.",
				intro:
					"We align content, structure and technical performance so search engines and people can better understand your website's value.",
				capabilities: [
					"Technical and content SEO audit",
					"Keyword and competitor research",
					"On-page, metadata and heading optimization",
					"Local SEO and Google Business Profile",
					"Core Web Vitals and load speed",
					"Search Console measurement and reporting",
				],
				details: [
					{
						title: "Technical foundations first",
						text: "If Google cannot crawl, understand or load your site, no amount of content will save it. We start with indexing, structure, speed and structured data.",
					},
					{
						title: "Searches with real intent",
						text: "We prioritize buying-intent searches from your actual market, over generic terms where you compete against half a continent.",
					},
					{
						title: "Results you can verify",
						text: "We leave Search Console and analytics configured, with a measured starting point, so you can check for yourself what changed and when.",
					},
				],
				imageAlt: "Website search positioning and optimization analysis",
			},
		},
	},
	{
		id: "consulting",
		featured: true,
		image: "/images/10-consultoria-digital.avif",
		imageWidth: 1500,
		imageHeight: 1000,
		cardImage: "/images/mockups/laptop_y_movil_condo_hub.avif",
		ogImage: "/images/og/consulting.jpg",
		locales: {
			es: {
				slug: "consultoria-ti",
				title: "Consultoría TI y análisis",
				h1: "Consultoría TI, análisis de requerimientos y gestión de proyectos",
				seoTitle:
					"Consultoría TI y análisis de requerimientos en RD | Managero",
				description:
					"Levantamiento de requerimientos, gestión ágil y guía para que tu proyecto digital llegue a buen puerto.",
				seoDescription:
					"Consultoría TI en República Dominicana: levantamiento y documentación de requerimientos, gestión ágil de proyectos (Scrum) y guía técnica antes de invertir.",
				intro:
					"Antes de construir hay que entender qué se necesita. Levanto y documento los requerimientos, ordeno prioridades y acompaño al equipo con Scrum hasta la entrega.",
				capabilities: [
					"Levantamiento y documentación de requerimientos",
					"Historias de usuario y criterios de aceptación",
					"Product discovery y priorización del backlog",
					"Gestión ágil del proyecto (Scrum, Jira, Azure DevOps)",
					"Selección de plataforma, herramientas y proveedores",
					"Acompañamiento como Product Owner",
				],
				details: [
					{
						title: "Empezamos por dónde estás",
						text: "Revisamos tu sitio, tus canales, tus herramientas y tus datos. Muchas veces el problema no es falta de inversión, sino esfuerzo repartido en demasiados frentes.",
					},
					{
						title: "Prioridades, no una lista de deseos",
						text: "Ordenamos las oportunidades por impacto y esfuerzo, para que sepas qué hacer este trimestre y qué puede esperar sin costo real.",
					},
					{
						title: "Te queda el criterio, no la dependencia",
						text: "El entregable incluye el porqué de cada recomendación, para que tu equipo pueda decidir sin llamarnos cada vez.",
					},
				],
				imageAlt: "Planificación de una estrategia digital multiplataforma",
			},
			en: {
				slug: "it-consulting",
				title: "IT consulting and analysis",
				h1: "IT consulting, requirements analysis and project management",
				seoTitle:
					"IT consulting and requirements analysis in the DR | Managero",
				description:
					"Requirements gathering, agile management and guidance so your digital project gets delivered.",
				seoDescription:
					"IT consulting in the Dominican Republic: requirements gathering and documentation, agile project management (Scrum) and technical guidance before you invest.",
				intro:
					"Before building, you need to understand what is needed. I gather and document requirements, set priorities and support the team with Scrum through delivery.",
				capabilities: [
					"Requirements gathering and documentation",
					"User stories and acceptance criteria",
					"Product discovery and backlog prioritization",
					"Agile project management (Scrum, Jira, Azure DevOps)",
					"Platform, tool and vendor selection",
					"Product Owner support",
				],
				details: [
					{
						title: "We start from where you are",
						text: "We review your site, your channels, your tools and your data. Often the problem is not lack of investment but effort spread across too many fronts.",
					},
					{
						title: "Priorities, not a wish list",
						text: "We rank opportunities by impact and effort, so you know what to do this quarter and what can wait at no real cost.",
					},
					{
						title: "You keep the judgment, not the dependency",
						text: "The deliverable includes the reasoning behind each recommendation, so your team can decide without calling us every time.",
					},
				],
				imageAlt: "Planning a multi-platform digital strategy",
			},
		},
	},
];

const segment = (locale: Locale) =>
	locale === "es" ? "servicios" : "services";

export const servicesIndexPath = (locale: Locale) =>
	`/${locale}/${segment(locale)}/`;

const localize = (service: Service, locale: Locale) => {
	const other: Locale = locale === "es" ? "en" : "es";
	return {
		...service,
		...service.locales[locale],
		href: `${servicesIndexPath(locale)}${service.locales[locale].slug}/`,
		alternatePath: `${servicesIndexPath(other)}${service.locales[other].slug}/`,
	};
};

export type LocalizedServiceEntry = ReturnType<typeof localize>;

export const getAllServices = (locale: Locale): LocalizedServiceEntry[] =>
	services.map((service) => localize(service, locale));

export const getServices = (locale: Locale): LocalizedServiceEntry[] =>
	getAllServices(locale).filter((service) => service.featured);

export const getExtraServices = (locale: Locale): LocalizedServiceEntry[] =>
	getAllServices(locale).filter((service) => !service.featured);

export const getRelatedServices = (
	locale: Locale,
	currentId: ServiceId,
	limit = 3,
): LocalizedServiceEntry[] =>
	getAllServices(locale)
		.filter((service) => service.id !== currentId)
		.slice(0, limit);
