import { env } from "@aishah-dot/env/server";
import { createNextConfig } from "@aishah-dot/next-config";

const nextConfig = createNextConfig({
	eveAgentUrl: env.EVE_AGENT_URL,
});

export default nextConfig;
