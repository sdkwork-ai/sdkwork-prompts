import type { AdminPromptBindingItem } from './admin-prompt-binding-item';

export interface PromptsAdminBindingsUpdateResponse {
  code: 0;
  data: unknown & { item: AdminPromptBindingItem; };
  /** Server-owned request correlation id. */
  traceId: string;
}
