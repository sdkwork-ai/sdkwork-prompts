import type { AgentPromptTemplate } from './agent-prompt-template';

export interface PromptsAgentTemplatesRetrieveResponse {
  code: 0;
  data: unknown & { item: AgentPromptTemplate; };
  /** Server-owned request correlation id. */
  traceId: string;
}
