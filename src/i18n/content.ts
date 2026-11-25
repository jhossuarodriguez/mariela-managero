export type Locale = "es" | "en";

export const localePath = (locale: Locale) => `/${locale}/`;
export const talkPath = (locale: Locale) =>
	locale === "es" ? "/es/hablemos/" : "/en/lets-talk/";

export const ui = {
	es: {
		seo: {
			homeTitle:
				"Mariela Arias · Desarrollo web, tiendas y apps en RD | Managero",
			homeDescription:
				"Desarrollo web en WordPress, Shopify y código a medida, apps y consultoría TI en Santo Domingo. Trabaja directamente con Mariela Arias, Product Owner certificada.",
		},
		nav: {
			links: [
				{ label: "Servicios", hash: "servicios" },
				{ label: "Proyectos", hash: "proyectos" },
				{ label: "Sobre mí", hash: "sobre-mi" },
				{ label: "Contacto", hash: "contacto" },
			],
			talk: "Hablemos",
			home: "Inicio",
			services: "Servicios",
			open: "Abrir menú",
			close: "Cerrar menú",
			mainLabel: "Navegación principal",
			mobileLabel: "Navegación móvil",
			footerLabel: "Navegación del pie de página",
			backHome: "Volver al inicio",
			language: "Seleccionar idioma",
		},
		hero: {
			title: "Agencia de branding, diseño web y apps",
			description:
				"Convertimos ideas en experiencias digitales con diseño, estrategia y tecnología.",
			cta: "Iniciar proyecto",
			alt: "Collage de proyectos y aplicaciones de marca creadas por Managero",
		},
		intro: {
			eyebrow: "Sobre mí",
			photoAlt: "Mariela Arias, fundadora de Managero RD",
			badgeName: "Mariela Arias",
			badgeRole: "Product Owner y consultora TI",
			title: "Hola, soy Mariela Arias",
			description:
				"Soy ingeniera en sistemas, desarrolladora WordPress y Product Owner certificada. Managero RD es mi estudio: trabajo contigo directamente y sumo colaboradores de confianza cuando el proyecto lo pide.",
			cta: "Ver mi portafolio",
			facts: [
				{ value: "+7 años", label: "creando sitios y sistemas" },
				{ value: "Scrum / PO", label: "gestión ágil certificada" },
				{ value: "Web, tiendas y apps", label: "de la idea a la entrega" },
				{ value: "Requerimientos", label: "analista de sistemas" },
			],
		},
		services: {
			eyebrow: "Servicios",
			title: "En qué te puedo ayudar",
			description:
				"Desde entender qué necesitas hasta mantener funcionando lo que construimos.",
			view: "Ver servicio",
		},
		projects: {
			eyebrow: "Trabajos",
			title: "Proyectos recientes",
			description: "Algunos negocios con los que he trabajado.",
			pending: "Captura en camino",
		},
		stack: {
			eyebrow: "Herramientas",
			title: "Con lo que trabajo todos los días",
			items: [
				"WordPress",
				"WooCommerce",
				"Shopify",
				"Astro",
				"Figma",
				".NET",
				"SQL Server",
				"Azure DevOps",
				"Jira",
				"Confluence",
			],
		},
		processTitle: "Así trabajo",
		processDescription:
			"Cada paso termina con algo concreto en tus manos, no con una promesa.",
		contact: {
			titleTop: "Hablemos",
			titleBottom: "de tu proyecto",
			description:
				"Cuéntame qué necesitas. Te respondo yo, normalmente en menos de un día.",
		},
		form: {
			name: "Nombre",
			email: "Correo",
			emailPlaceholder: "Correo electrónico",
			company: "Empresa o marca",
			phone: "Teléfono",
			service: "Servicio",
			selectService: "Selecciona un servicio",
			budget: "Presupuesto estimado",
			selectBudget: "Selecciona un rango",
			selectServiceFirst: "Primero elige un servicio",
			payment: "Forma de pago",
			estimateNote:
				"Rangos orientativos; la cotización final depende del alcance.",
			timeline: "¿Cuándo te gustaría comenzar?",
			message: "Mensaje",
			messagePlaceholder: "Cuéntame qué tienes en mente...",
			submit: "Enviar solicitud",
			error: "Ocurrió un error. Inténtalo de nuevo.",
			verification: "Completa la verificación de seguridad.",
			services: {
				web: "Diseño y desarrollo web",
				ecommerce: "Tienda en línea",
				apps: "Apps y sistemas",
				consulting: "Consultoría TI y análisis",
				branding: "Identidad visual",
				seo: "SEO y optimización",
				maintenance: "Mantenimiento web",
			},
		},
		talk: {
			eyebrow: "Hablemos",

			title: "Hablemos de tu web, tienda o app",
			description:
				"Todo proyecto empieza con una buena conversación. Cuéntame qué necesitas y te respondo con preguntas claras, ideas concretas y un camino para comenzar.",
			brandsTitle: "Marcas e ideas que ya hemos acompañado",
			brandsDescription:
				"Hemos convertido estrategia y creatividad en identidades, productos digitales y piezas que viven en el mundo real.",
			formTitle: "Cuéntame un poco más",
			formDescription:
				"Mientras más contexto compartas, más útil será nuestra primera conversación.",
			seoTitle: "Hablemos de tu proyecto | Managero",
			seoDescription:
				"Conversemos sobre tu próximo sitio web, tienda en línea o app en Santo Domingo. Completa el formulario de Managero.",
		},
		servicePage: {
			eyebrow: "Servicio",
			back: "Servicios",
			helpTitle: "Cómo podemos ayudarte",
			includedTitle: "Lo que podemos trabajar juntos",
			detailsTitle: "Cómo lo trabajamos",
			relatedTitle: "Otros servicios",
			relatedDescription:
				"Los servicios se refuerzan entre sí. Estos son los que suelen acompañar a este proyecto.",
			allServices: "Ver todos los servicios",
			ctaTitle: "Convirtamos este reto en tu próximo avance.",
			ctaDescription:
				"Cuéntanos qué necesitas y diseñaremos una ruta ajustada a tu marca.",
			cta: "Hablemos de tu proyecto",
		},
		servicesIndex: {
			eyebrow: "Servicios",
			title: "Servicios de desarrollo web, tiendas, apps y consultoría",
			description:
				"Siete servicios para llevar tu negocio a digital: desde entender qué necesitas hasta mantener funcionando lo que construimos.",
			featuredTitle: "Servicios principales",
			featuredDescription:
				"El centro del trabajo: sitios web, tiendas en línea, apps y consultoría.",
			extraTitle: "Servicios complementarios",
			extraDescription:
				"Para darle identidad, visibilidad y cuidado a lo que ya está en marcha.",
			seoTitle: "Servicios de desarrollo web, tiendas y apps en RD | Managero",
			seoDescription:
				"Desarrollo web en WordPress y código, tiendas en Shopify y WooCommerce, apps, consultoría TI, identidad visual, SEO y mantenimiento en Santo Domingo.",
		},
		notFound: {
			eyebrow: "Error 404",
			title: "Esta página no existe",
			description:
				"Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio o cuéntanos tu proyecto.",
			cta: "Volver al inicio",
			secondaryCta: "Hablemos de tu proyecto",
			seoTitle: "Página no encontrada | Managero",
			seoDescription: "La página que buscas no existe o fue movida.",
		},
	},
	en: {
		seo: {
			homeTitle:
				"Mariela Arias · Web development, stores and apps in the DR | Managero",
			homeDescription:
				"Web development in WordPress, Shopify and custom code, apps and IT consulting in Santo Domingo. Work directly with Mariela Arias, certified Product Owner.",
		},
		nav: {
			links: [
				{ label: "Services", hash: "services" },
				{ label: "Projects", hash: "projects" },
				{ label: "About me", hash: "about" },
				{ label: "Contact", hash: "contact" },
			],
			talk: "Let's talk",
			home: "Home",
			services: "Services",
			open: "Open menu",
			close: "Close menu",
			mainLabel: "Main navigation",
			mobileLabel: "Mobile navigation",
			footerLabel: "Footer navigation",
			backHome: "Back to home",
			language: "Select language",
		},
		hero: {
			title: "Branding, web design and apps agency",
			description:
				"We turn ideas into digital experiences through design, strategy and technology.",
			cta: "Start a project",
			alt: "Collage of brand projects and applications created by Managero",
		},
		intro: {
			eyebrow: "About me",
			photoAlt: "Mariela Arias, founder of Managero RD",
			badgeName: "Mariela Arias",
			badgeRole: "Product Owner and IT consultant",
			title: "Hi, I'm Mariela Arias",
			description:
				"I'm a systems engineer, WordPress developer and certified Product Owner. Managero RD is my studio: you work with me directly, and I bring in trusted collaborators when the project needs it.",
			cta: "See my portfolio",
			facts: [
				{ value: "7+ years", label: "building sites and systems" },
				{ value: "Scrum / PO", label: "certified agile management" },
				{ value: "Web, stores and apps", label: "from idea to delivery" },
				{ value: "Requirements", label: "systems analyst" },
			],
		},
		services: {
			eyebrow: "Services",
			title: "How I can help",
			description:
				"From understanding what you need to keeping what we build running.",
			view: "See service",
		},
		projects: {
			eyebrow: "Work",
			title: "Recent projects",
			description: "A few of the businesses I've worked with.",
			pending: "Screenshot coming soon",
		},
		stack: {
			eyebrow: "Tools",
			title: "What I work with every day",
			items: [
				"WordPress",
				"WooCommerce",
				"Shopify",
				"Astro",
				"Figma",
				".NET",
				"SQL Server",
				"Azure DevOps",
				"Jira",
				"Confluence",
			],
		},
		processTitle: "How I work",
		processDescription:
			"Every step ends with something concrete in your hands, not a promise.",
		contact: {
			titleTop: "Let's talk",
			titleBottom: "about your project",
			description:
				"Tell me what you need. I'll reply myself, usually within a day.",
		},
		form: {
			name: "Name",
			email: "Email",
			emailPlaceholder: "Email address",
			company: "Company or brand",
			phone: "Phone",
			service: "Service",
			selectService: "Select a service",
			budget: "Estimated budget",
			selectBudget: "Select a range",
			selectServiceFirst: "Choose a service first",
			payment: "Payment terms",
			estimateNote: "Estimated ranges; the final quote depends on scope.",
			timeline: "When would you like to start?",
			message: "Message",
			messagePlaceholder: "Tell me what you have in mind...",
			submit: "Send request",
			error: "Something went wrong. Please try again.",
			verification: "Please complete the security verification.",
			services: {
				web: "Web design and development",
				ecommerce: "Online store",
				apps: "Apps and systems",
				consulting: "IT consulting and analysis",
				branding: "Visual identity",
				seo: "SEO and optimization",
				maintenance: "Web maintenance",
			},
		},
		talk: {
			eyebrow: "Let's talk",

			title: "Let's talk about your website, store or app",
			description:
				"Every project starts with a good conversation. Tell me what you need and I'll reply with clear questions, concrete ideas and a path to get started.",
			brandsTitle: "Brands and ideas we have already supported",
			brandsDescription:
				"We have turned strategy and creativity into identities, digital products and pieces that live in the real world.",
			formTitle: "Tell me a little more",
			formDescription:
				"The more context you share, the more useful our first conversation will be.",
			seoTitle: "Let's talk about your project | Managero",
			seoDescription:
				"Let's discuss your next website, online store or app in Santo Domingo. Complete Managero's project form.",
		},
		servicePage: {
			eyebrow: "Service",
			back: "Services",
			helpTitle: "How we can help",
			includedTitle: "What we can work on together",
			detailsTitle: "How we work on it",
			relatedTitle: "Other services",
			relatedDescription:
				"These services reinforce each other. These are the ones that usually accompany this project.",
			allServices: "See all services",
			ctaTitle: "Let's turn this challenge into your next step forward.",
			ctaDescription:
				"Tell us what you need and we'll design a path around your brand.",
			cta: "Let's talk about your project",
		},
		servicesIndex: {
			eyebrow: "Services",
			title: "Web development, store, app and consulting services",
			description:
				"Seven services to take your business digital: from understanding what you need to keeping what we build running.",
			featuredTitle: "Core services",
			featuredDescription:
				"The heart of the work: websites, online stores, apps and consulting.",
			extraTitle: "Complementary services",
			extraDescription:
				"To give identity, visibility and care to what is already running.",
			seoTitle: "Web development, store and app services in the DR | Managero",
			seoDescription:
				"Web development in WordPress and custom code, Shopify and WooCommerce stores, apps, IT consulting, visual identity, SEO and maintenance in Santo Domingo.",
		},
		notFound: {
			eyebrow: "Error 404",
			title: "This page doesn't exist",
			description:
				"The link might be broken or the page may have moved. Head back home or tell us about your project.",
			cta: "Back to home",
			secondaryCta: "Let's talk about your project",
			seoTitle: "Page not found | Managero",
			seoDescription: "The page you're looking for doesn't exist or was moved.",
		},
	},
} as const;
