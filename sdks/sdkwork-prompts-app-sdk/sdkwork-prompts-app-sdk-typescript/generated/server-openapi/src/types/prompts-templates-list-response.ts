import type { PageInfo } from './page-info';
import type { PromptTemplate } from './prompt-template';

export interface PromptsTemplatesListResponse {
  code: 0;
  data: unknown & { items: PromptTemplate[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
