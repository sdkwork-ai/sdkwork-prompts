import type { PromptTemplate } from './prompt-template';

export interface PromptsTemplatesRetrieveResponse {
  code: 0;
  data: unknown & { item: PromptTemplate; };
  /** Server-owned request correlation id. */
  traceId: string;
}
