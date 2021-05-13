import { makeRequestConfig, sendRequest } from './common';

export interface IHaravanCollection {
  collection_id: number;
  created_at: string;
  featured: boolean;
  id: number;
  position: number;
  product_id: number;
  sort_value: string;
  updated_at: string;
}

export function getHaravanCollections(param: {
  accessToken: string;
  query?: string;
  delay?: number;
}): Promise<IHaravanCollection[]> {
  const { accessToken, query, delay } = param;
  const config = makeRequestConfig({
    path: `/com/collects.json`,
    method: 'GET',
    accessToken,
    rootField: 'collects',
    delay,
    query
  });
  return sendRequest(config);
}
