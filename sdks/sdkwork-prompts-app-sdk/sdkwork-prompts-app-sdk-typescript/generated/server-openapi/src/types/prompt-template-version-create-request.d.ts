import type { PromptTemplateVariableInput } from './prompt-template-variable-input';
export interface PromptTemplateVersionCreateRequest {
    version_label: string;
    content: string;
    model_hint?: string;
    variables?: PromptTemplateVariableInput[];
}
//# sourceMappingURL=prompt-template-version-create-request.d.ts.map