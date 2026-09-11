import type { ApiRequestOptions, HttpClient } from '../http/client';
import type { AgentPromptTemplate, PageInfo, PromptTemplate, PromptTemplateCreateRequest, PromptTemplateUpdateRequest, PromptTemplateVersion, PromptTemplateVersionCreateRequest } from '../types';
export interface PromptsAgentTemplatesListParams {
    pageSize?: number;
}
export declare class PromptsAgentTemplatesApi {
    private client;
    constructor(client: HttpClient);
    /** List agent prompt templates. */
    list(params?: PromptsAgentTemplatesListParams, requestOptions?: ApiRequestOptions): Promise<{
        items: AgentPromptTemplate[];
        pageInfo: PageInfo;
    }>;
    /** Get agent prompt template. */
    retrieve(templateId: string, requestOptions?: ApiRequestOptions): Promise<AgentPromptTemplate>;
}
export declare class PromptsTemplateVersionsApi {
    private client;
    constructor(client: HttpClient);
    /** List template versions. */
    list(templateId: string, requestOptions?: ApiRequestOptions): Promise<{
        items: PromptTemplateVersion[];
        pageInfo: PageInfo;
    }>;
    /** Create template version. */
    create(templateId: string, body: PromptTemplateVersionCreateRequest, requestOptions?: ApiRequestOptions): Promise<PromptTemplateVersion>;
}
export interface PromptsTemplatesListParams {
    cursor?: string;
    pageSize?: number;
    status?: 'draft' | 'active' | 'archived';
}
export declare class PromptsTemplatesApi {
    private client;
    constructor(client: HttpClient);
    /** List prompt templates. */
    list(params?: PromptsTemplatesListParams, requestOptions?: ApiRequestOptions): Promise<{
        items: PromptTemplate[];
        pageInfo: PageInfo;
    }>;
    /** Create prompt template. */
    create(body: PromptTemplateCreateRequest, requestOptions?: ApiRequestOptions): Promise<PromptTemplate>;
    /** Get prompt template. */
    retrieve(templateId: string, requestOptions?: ApiRequestOptions): Promise<PromptTemplate>;
    /** Update prompt template metadata. */
    update(templateId: string, body: PromptTemplateUpdateRequest, requestOptions?: ApiRequestOptions): Promise<PromptTemplate>;
}
export declare class PromptsApi {
    readonly templates: PromptsTemplatesApi;
    readonly templateVersions: PromptsTemplateVersionsApi;
    readonly agentTemplates: PromptsAgentTemplatesApi;
    constructor(client: HttpClient);
}
export declare function createPromptsApi(client: HttpClient): PromptsApi;
//# sourceMappingURL=prompts.d.ts.map