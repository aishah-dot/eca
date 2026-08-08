import { defineConfig } from "blume";

export default defineConfig({
	title: "Aishah Dot AI Docs",
	description: "Documentation for Aishah Dot AI.",
	navigation: {
		tabs: [
			{ label: "Docs", path: "/" },
			{ label: "API", path: "/reference" },
		],
	},
	openapi: {
		enabled: true,
		spec: "./docs/openapi/openapi.json",
	},
});
