import { makeRequestConfig, sendRequest } from './common';

export interface IVariant {
  barcode: string;
  compare_at_price: number;
  created_at: string;
  fulfillment_service: string;
  grams: number;
  id: number;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  inventory_quantity_adjustment: string;
  position: number;
  price: number;
  product_id: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: string;
  image_id: string;
  option1: string;
  option2: string;
  option3: string;
  inventory_advance: string;
}

export function getProductVariant(param: {
  accessToken: string;
  id: string;
  delay?: number;
}): Promise<IVariant> {
  const { accessToken, id, delay } = param;
  const config = makeRequestConfig({
    path: `/com/variants/${id}.json`,
    method: 'GET',
    accessToken,
    rootField: 'variant',
    delay
  });
  return sendRequest(config);
}

export function putProductVariant(param: {
  accessToken: string;
  id: string;
  variant: Partial<IVariant>;
  delay?: number;
}): Promise<IVariant> {
  const { accessToken, id, variant, delay } = param;
  const config = makeRequestConfig({
    path: `/com/variants/${id}.json`,
    method: 'PUT',
    accessToken,
    data: { variant },
    rootField: 'variant',
    delay
  });
  return sendRequest(config);
}
