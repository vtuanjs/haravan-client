import { makeRequestConfig, sendRequest } from '../common';

export interface IHaravanPublicCollection {
  id: number;
  title: string;
  handle: string;
  description: string;
  published_at: string;
  updated_at: string;
  image: {
    src: string;
    alt: string;
  } | null;
  products_count: number;
}

export function getHaravanPublicCollection({
  url,
  domain,
  handle
}: {
  url?: string;
  domain?: string;
  handle?: string;
} & (
  | {
      url: string;
    }
  | {
      domain?: string;
      handle?: string;
    }
)): Promise<IHaravanPublicCollection> {
  const config = makeRequestConfig({
    url: url || `${domain}/collections/${handle}.json`,
    accessToken: '',
    method: 'GET',
    rootField: 'collection',
    delay: 0
  });

  return sendRequest(config);
}

export function getHaravanPublicCollections({
  domain,
  page
}: {
  domain: string;
  page: number;
}): Promise<IHaravanPublicCollection[]> {
  const config = makeRequestConfig({
    url: `${domain}/collections.json?page=${page}`,
    accessToken: '',
    method: 'GET',
    rootField: 'collections',
    delay: 0
  });

  return sendRequest(config);
}
