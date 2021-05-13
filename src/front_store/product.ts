import { IHaravanProduct } from '../product';
import { makeRequestConfig, sendRequest } from '../common';

export function getHaravanPublicProducts({
  domain,
  page,
  collectionHandle
}: {
  domain: string;
  page: number;
  collectionHandle?: string;
}): Promise<IHaravanProduct[]> {
  const url = collectionHandle
    ? `${domain}/collections/${collectionHandle}/products.json?page=${page}`
    : `${domain}/collections/all/products.json?page=${page}`;

  const config = makeRequestConfig({
    url,
    accessToken: '',
    method: 'GET',
    rootField: 'products',
    delay: 0
  });

  return sendRequest(config);
}

export function getHaravanPublicProduct({
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
)): Promise<IHaravanProduct> {
  const config = makeRequestConfig({
    url: url || `${domain}/products/${handle}.json`,
    accessToken: '',
    method: 'GET',
    rootField: 'product',
    delay: 0
  });

  return sendRequest(config);
}
