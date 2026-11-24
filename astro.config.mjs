import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { getAllServices, servicesIndexPath } from "./src/data/services.ts";
import { SITE } from "./src/data/site.ts";

const abs = (path) => new URL(path, SITE).href;

const localeAlternates = () => {
	const pairs = [
		["/es/", "/en/"],
		["/es/hablemos/", "/en/lets-talk/"],
		[servicesIndexPath("es"), servicesIndexPath("en")],
		...getAllServices("es").map((service) => [
			service.href,
			service.alternatePath,
		]),
	];

	const map = new Map();

	for (const [es, en] of pairs) {
		const links = [
			{ lang: "es", url: abs(es) },
			{ lang: "en", url: abs(en) },

			{ lang: "x-default", url: abs(es) },
		];
		map.set(abs(es), links);
		map.set(abs(en), links);
	}

	return map;
};

const alternates = localeAlternates();

export default defineConfig({
	site: SITE,
	trailingSlash: "always",
	// Servicios retirados o renombrados en el rediseño de noviembre de 2026.
	redirects: {
		"/es/servicios/marketing-digital/": "/es/servicios/",
		"/en/services/digital-marketing/": "/en/services/",
		"/es/servicios/diseno-grafico/": "/es/servicios/branding/",
		"/en/services/graphic-design/": "/en/services/branding/",
		"/es/servicios/consultoria-digital/": "/es/servicios/consultoria-ti/",
		"/en/services/digital-consulting/": "/en/services/it-consulting/",
	},
	adapter: vercel(),
	integrations: [
		sitemap({
			namespaces: { news: false, video: false, image: false, xhtml: true },

			filter: (page) => page !== `${SITE}/`,

			serialize: (item) => ({ ...item, links: alternates.get(item.url) }),
		}),
	],
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
