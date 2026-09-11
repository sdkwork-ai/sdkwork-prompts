import type { HttpClient } from '../http/client';
import type { AdminPromptBindingCreateRequest, AdminPromptBindingItem, AdminPromptBindingUpdateRequest, AdminPromptCreateRequest, AdminPromptItem, AdminPromptRenderRequest, AdminPromptVersionCreateRequest, AdminPromptVersionItem, SdkWorkPageData } from '../types';
export declare class PromptsAdminPromptsAdminBindingsApi {
    private client;
    constructor(client: HttpClient);
    list(promptId: string): Promise<SdkWorkPageData>;
    create(promptId: string, body: AdminPromptBindingCreateRequest): Promise<AdminPromptBindingItem>;
    update(bindingId: string, body: AdminPromptBindingUpdateRequest): Promise<AdminPromptBindingItem>;
}
export declare class PromptsAdminPromptsAdminVersionsApi {
    private client;
    constructor(client: HttpClient);
    list(promptId: string): Promise<SdkWorkPageData>;
    create(promptId: string, body: AdminPromptVersionCreateRequest): Promise<AdminPromptVersionItem>;
    publish(versionId: string): Promise<AdminPromptVersionItem>;
    render(versionId: string, body?: AdminPromptRenderRequest): Promise<Record<string, unknown>>;
}
export interface PromptsAdminPromptsAdminDefinitionsListParams {
    page?: number;
    pageSize?: number;
    q?: string;
    promptType?: string;
    visibility?: string;
    status?: string;
    categoryId?: string;
}
export declare class PromptsAdminPromptsAdminDefinitionsApi {
    private client;
    constructor(client: HttpClient);
    list(params?: PromptsAdminPromptsAdminDefinitionsListParams): Promise<SdkWorkPageData>;
    create(body: AdminPromptCreateRequest): Promise<AdminPromptItem>;
}
export declare class PromptsAdminPromptsAdminApi {
    private client;
    readonly definitions: PromptsAdminPromptsAdminDefinitionsApi;
    readonly versions: PromptsAdminPromptsAdminVersionsApi;
    readonly bindings: PromptsAdminPromptsAdminBindingsApi;
    constructor(client: HttpClient);
}
export declare class PromptsAdminPromptsApi {
    private client;
    readonly admin: PromptsAdminPromptsAdminApi;
    constructor(client: HttpClient);
}
export declare class PromptsAdminApi {
    private client;
    readonly prompts: PromptsAdminPromptsApi;
    constructor(client: HttpClient);
}
export declare function createPromptsAdminApi(client: HttpClient): PromptsAdminApi;
//# sourceMappingURL=prompts-admin.d.ts.map