import { HttpClient } from './http/client';
import type { SdkworkBackendConfig } from './types/common';
import type { AuthTokenManager } from '@sdkwork/sdk-common';
import { PromptsAdminApi } from './api/prompts-admin';
export declare class SdkworkPromptsBackendClient {
    private httpClient;
    readonly promptsAdmin: PromptsAdminApi;
    constructor(config: SdkworkBackendConfig);
    setAuthToken(token: string): this;
    setAccessToken(token: string): this;
    setTokenManager(manager: AuthTokenManager): this;
    get http(): HttpClient;
}
export declare function createClient(config: SdkworkBackendConfig): SdkworkPromptsBackendClient;
export default SdkworkPromptsBackendClient;
//# sourceMappingURL=sdk.d.ts.map