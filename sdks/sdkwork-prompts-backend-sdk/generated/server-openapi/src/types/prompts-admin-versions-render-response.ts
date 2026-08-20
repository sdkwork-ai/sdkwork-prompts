export interface PromptsAdminVersionsRenderResponse {
  code: 0;
  data: unknown & { rendered: string; };
  /** Server-owned request correlation id. */
  traceId: string;
}
