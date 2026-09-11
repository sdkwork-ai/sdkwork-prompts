import { createHttpClient } from './http/client';
import { createPromptsAdminApi } from './api/prompts-admin';
export class SdkworkPromptsBackendClient {
    httpClient;
    promptsAdmin;
    constructor(config) {
        this.httpClient = createHttpClient(config);
        this.promptsAdmin = createPromptsAdminApi(this.httpClient);
    }
    setAuthToken(token) {
        this.httpClient.setAuthToken(token);
        return this;
    }
    setAccessToken(token) {
        this.httpClient.setAccessToken(token);
        return this;
    }
    setTokenManager(manager) {
        this.httpClient.setTokenManager(manager);
        return this;
    }
    get http() {
        return this.httpClient;
    }
}
export function createClient(config) {
    return new SdkworkPromptsBackendClient(config);
}
export default SdkworkPromptsBackendClient;
//# sourceMappingURL=sdk.js.map