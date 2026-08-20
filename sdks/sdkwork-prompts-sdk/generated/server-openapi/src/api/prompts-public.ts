import { customApiPath } from './paths';
import type { ApiRequestOptions, HttpClient } from '../http/client';

import type { PageInfo, PromptCatalogEntry } from '../types';


export class PromptsPublicPromptsCatalogApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }


async list(requestOptions?: ApiRequestOptions): Promise<{ items: PromptCatalogEntry[]; pageInfo: PageInfo; }> {
    return this.client.request<{ items: PromptCatalogEntry[]; pageInfo: PageInfo; }>(customApiPath(`/prompts/catalog`), { ...(requestOptions?.signal !== undefined ? { signal: requestOptions.signal } : {}), ...(requestOptions?.timeout !== undefined ? { timeout: requestOptions.timeout } : {}), method: 'GET' as any, skipAuth: true, sdkworkUnwrapKind: 'page' });
  }
}

export class PromptsPublicPromptsApi {
  public readonly catalog: PromptsPublicPromptsCatalogApi;

  constructor(client: HttpClient) {
    this.catalog = new PromptsPublicPromptsCatalogApi(client);
  }

}

export class PromptsPublicApi {
  public readonly prompts: PromptsPublicPromptsApi;

  constructor(client: HttpClient) {
    this.prompts = new PromptsPublicPromptsApi(client);
  }

}

export function createPromptsPublicApi(client: HttpClient): PromptsPublicApi {
  return new PromptsPublicApi(client);
}
