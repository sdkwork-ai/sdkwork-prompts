import type { PromptTemplateVersion } from './prompt-template-version';

export interface PromptsTemplateVersionsCreateResponse201 {
  code: 0;
  data: unknown & { item: PromptTemplateVersion; };
  /** Server-owned request correlation id. */
  traceId: string;
}
