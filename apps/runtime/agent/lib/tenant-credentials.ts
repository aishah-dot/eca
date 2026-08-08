import { getIntegrationCredentials } from "@aishah-dot/api/services/integrations";
import type { IntegrationProvider } from "@aishah-dot/contracts";

export interface TenantCredentialProvider {
	getCredentials(
		workspaceId: string,
		provider: IntegrationProvider,
	): Promise<Record<string, string> | null>;
}

export const tenantCredentials: TenantCredentialProvider = {
	async getCredentials(workspaceId, provider) {
		const integration = await getIntegrationCredentials({
			workspaceId,
			provider,
		});
		return integration?.credentials ?? null;
	},
};
