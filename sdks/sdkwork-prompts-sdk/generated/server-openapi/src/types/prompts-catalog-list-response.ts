import type { PageInfo } from './page-info';
import type { PromptCatalogEntry } from './prompt-catalog-entry';

export interface PromptsCatalogListResponse {
  code: 0;
  data: unknown & { items: PromptCatalogEntry[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
