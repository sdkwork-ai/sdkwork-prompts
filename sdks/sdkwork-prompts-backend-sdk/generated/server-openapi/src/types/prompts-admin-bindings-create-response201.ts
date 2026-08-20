import type { AdminPromptBindingItem } from './admin-prompt-binding-item';

export interface PromptsAdminBindingsCreateResponse201 {
  code: 0;
  data: unknown & { item: AdminPromptBindingItem; };
  /** Server-owned request correlation id. */
  traceId: string;
}
