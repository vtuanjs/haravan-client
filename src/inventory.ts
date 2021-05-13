import { makeRequestConfig, sendRequest } from './common';
import { IHaravanProduct } from './product';

export type IHaravanInventory = {
  location_id: number;
  type?: 'set' | 'adjust';
  reason?:
    | 'newproduct'
    | 'returned'
    | 'productionofgoods'
    | 'damaged'
    | 'shrinkage'
    | 'promotion'
    | 'transfer';
  note?: string;
  line_items: {
    product_id: number;
    product_variant_id: number;
    quantity: number;
  }[];
};

export function postInventory(param: {
  accessToken: string;
  inventory: IHaravanInventory;
  delay?: number;
}): Promise<IHaravanProduct> {
  const { accessToken, inventory, delay } = param;
  const config = makeRequestConfig({
    path: `/com/inventories/adjustorset.json`,
    method: 'POST',
    accessToken,
    data: { inventory },
    rootField: 'inventory',
    delay
  });
  return sendRequest(config);
}
