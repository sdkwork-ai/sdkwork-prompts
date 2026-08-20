import type { AgentPromptTemplate } from './agent-prompt-template';
import type { PageInfo } from './page-info';

export interface PromptsAgentTemplatesListResponse {
  code: 0;
  data: unknown & { items: AgentPromptTemplate[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
