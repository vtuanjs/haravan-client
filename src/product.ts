import { PartialDeep } from './type';
import { makeRequestConfig, sendRequest } from './common';
import { IVariant } from './variant';

export type HaravanProductOption = {
  name: string;
  position: number;
  product_id: number;
};

export type HaravanProductImage = {
  id: number;
  product_id: number;
  src: string;
  variant_ids: [string];
};

export interface IHaravanProduct {
  body_html: string;
  body_plain: string;
  created_at: string;
  handle: string;
  id: number;
  images: HaravanProductImage[];
  product_type: string;
  published_at: string;
  published_scope: string;
  tags: string;
  template_suffix: string;
  title: string;
  updated_at: string;
  variants: IVariant[];
  vendor: string;
  options: HaravanProductOption[];
  only_hide_from_list: boolean;
  not_allow_promotion: boolean;
}

export function getHaravanProducts(param: {
  accessToken: string;
  query?: string;
  delay?: number;
}): Promise<IHaravanProduct[]> {
  const { accessToken, query, delay } = param;
  const config = makeRequestConfig({
    path: `/com/products.json`,
    method: 'GET',
    accessToken,
    rootField: 'products',
    delay,
    query
  });
  return sendRequest(config);
}

export function getHaravanProduct(param: {
  accessToken: string;
  id: string;
  delay?: number;
}): Promise<IHaravanProduct> {
  const { accessToken, id, delay } = param;
  const config = makeRequestConfig({
    path: `/com/products/${id}.json`,
    method: 'GET',
    accessToken,
    rootField: 'product',
    delay
  });
  return sendRequest(config);
}

export function postHaravanProduct(param: {
  accessToken: string;
  product: PartialDeep<IHaravanProduct>;
  delay?: number;
}): Promise<IHaravanProduct> {
  const { accessToken, product, delay } = param;
  const config = makeRequestConfig({
    path: `/com/products.json`,
    method: 'POST',
    accessToken,
    data: { product },
    rootField: 'product',
    delay
  });
  return sendRequest(config);
}
