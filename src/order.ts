import { makeRequestConfig, sendRequest } from './common';
import { IHaravanFulfillment } from './fulfillment';

export interface IHaravanOrderShippingAddress {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  first_name: string;
  last_name: string;
  latitude: string;
  longitude: string;
  phone: string;
  province: string;
  zip: string;
  name: string;
  province_code: string;
  country_code: string;
  district_code: string;
  district: string;
  ward_code: string;
  ward: string;
}

export interface IHaravanOrderLineItem {
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: string;
  grams: number;
  id: number;
  price: number;
  price_original: number;
  price_promotion: number;
  product_id: number;
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  title: string;
  variant_id: number;
  variant_title: string;
  vendor: string;
  type: string;
  name: string;
  gift_card: boolean;
  taxable: boolean;
  tax_lines: string;
  product_exists: boolean;
  barcode: string;
  properties: any[];
  applied_discounts: any[];
  total_discount: number;
  image: {
    src: string;
  };
  not_allow_promotion: boolean;
  ma_cost_amount: number;
}

export interface IHaravanOrderCustomerAddress {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  province: string;
  zip: string;
  name: string;
  province_code: string;
  country_code: string;
  default: boolean;
  district: string;
  district_code: string;
  ward: string;
  ward_code: string;
}

export interface IHaravanOrderCustomer {
  accepts_marketing: boolean;
  addresses: IHaravanOrderCustomerAddress[];
  created_at: string;
  default_address: string;
  email: string;
  phone: string;
  first_name: number;
  id: number;
  last_name: string;
  last_order_id: number;
  last_order_name: string;
  note: string;
  orders_count: number;
  state: string;
  tags: string;
  total_spent: number;
  updated_at: string;
  verified_email: string;
  birthday: string;
  gender: string;
  last_order_date: string;
  multipass_identifier: string;
}

export interface IHaravanOrderClientDetail {
  accept_language: string;
  browser_ip: string;
  session_hash: string;
  user_agent: string;
  browser_height: string;
  browser_width: string;
}

export interface IHaravanOrderBillingAddress {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  province: string;
  zip: string;
  name: string;
  province_code: string;
  country_code: string;
  default: boolean;
  district: string;
  district_code: string;
  ward: string;
  ward_code: string;
}

export interface IHaravanOrder {
  billing_address: IHaravanOrderBillingAddress;
  browser_ip: string;
  buyer_accepts_marketing: boolean;
  cancel_reason: string;
  cancelled_at: string;
  cart_token: string;
  checkout_token: string;
  client_details: IHaravanOrderClientDetail;
  closed_at: string;
  created_at: string;
  currency: string;
  customer: IHaravanOrderCustomer;
  discount_codes: any[];
  email: string;
  financial_status: string;
  fulfillments: IHaravanFulfillment[];
  fulfillment_status: string;
  tags: string;
  gateway: string;
  gateway_code: string;
  id: number;
  landing_site: string;
  landing_site_ref: string;
  source: string;
  line_items: IHaravanOrderLineItem[];
  name: string;
  note: string;
  number: number;
  order_number: string;
  processing_method: string;
  referring_site: string;
  refunds: IRefundOrder[];
  shipping_address: IHaravanOrderShippingAddress;
  shipping_lines: {
    code: string;
    price: number;
    source: string;
    title: string;
  }[];
  source_name: string;
  subtotal_price: number;
  tax_lines: string;
  taxes_included: boolean;
  token: string;
  total_discounts: number;
  total_line_items_price: number;
  total_price: number;
  total_tax: number;
  total_weight: number;
  updated_at: string;
  transactions: {
    amount: number;
    authorization: string;
    created_at: string;
    device_id: string;
    gateway: string;
    id: number;
    kind: string;
    order_id: number;
    receipt: string;
    status: string;
    user_id: number;
    location_id: number;
    payment_details: string;
    parent_id: string;
    currency: string;
    haravan_transaction_id: string;
    external_transaction_id: string;
  }[];
  note_attributes: any[];
  confirmed_at: string;
  closed_status: string;
  cancelled_status: string;
  confirmed_status: string;
  user_id: number;
  device_id: string;
  location_id: number;
  ref_order_id: number;
  ref_order_number: string;
  has_promotion: boolean;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  redeem_model: string;
}

export interface IRefundOrder {
  created_at: string;
  id: number;
  note: string;
  refund_line_items: {
    id: number;
    line_item: {
      fulfillment_service: any;
      fulfillment_status: any;
      grams: number;
      price: number;
      product_id: number;
      quantity: number;
      requires_shipping: boolean;
      sku: string;
      title: string;
      variant_id: number;
      variant_title: string;
      vendor: string;
      name: string;
      id: number;
      barcode: string;
      properties: any;
    };
    line_item_id: number;
    quantity: number;
  }[];
  restock: boolean;
  user_id: number;
  order_id: number;
  transactions: any[];
}

export function confirmOrder(param: {
  accessToken: string;
  id: string;
  delay?: number;
}): Promise<IHaravanOrder> {
  const { accessToken, id, delay } = param;
  const config = makeRequestConfig({
    path: `/com/orders/${id}/confirm.json`,
    method: 'POST',
    accessToken,
    rootField: 'order',
    delay
  });
  return sendRequest(config);
}

export function cancelOrder(param: {
  accessToken: string;
  data: any;
  id: string;
  delay?: number;
}): Promise<IHaravanOrder> {
  const { accessToken, data, id, delay } = param;
  const config = makeRequestConfig({
    path: `/com/orders/${id}/cancel.json`,
    method: 'POST',
    accessToken,
    data,
    rootField: 'order',
    delay
  });
  return sendRequest(config);
}

export function putOrder(param: {
  accessToken: string;
  order: Partial<IHaravanOrder>;
  id: string;
  delay?: number;
}): Promise<IHaravanOrder> {
  const { accessToken, order, id, delay } = param;
  const config = makeRequestConfig({
    path: `/com/orders/${id}.json`,
    method: 'PUT',
    accessToken,
    data: { order },
    rootField: 'order',
    delay
  });
  return sendRequest(config);
}

export function getOrder(param: {
  accessToken: string;
  id: string;
  delay?: number;
}): Promise<IHaravanOrder> {
  const { accessToken, id, delay } = param;
  const config = makeRequestConfig({
    path: `/com/orders/${id}.json`,
    method: 'GET',
    accessToken,
    rootField: 'order',
    delay
  });
  return sendRequest(config);
}

export function postOrder(param: {
  accessToken: string;
  order: Partial<IHaravanOrder>;
  delay?: number;
}): Promise<IHaravanOrder> {
  const { accessToken, order, delay } = param;
  const config = makeRequestConfig({
    path: `/com/orders.json`,
    method: 'POST',
    accessToken,
    data: { order },
    rootField: 'order',
    delay
  });
  return sendRequest(config);
}
