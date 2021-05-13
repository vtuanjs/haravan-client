import { makeRequestConfig, sendRequest } from './common';
import { PartialDeep } from './type';

export interface IHaravanFulfillmentItem {
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: string;
  grams: number;
  id: number;
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
  variant_inventory_management: string;
  properties: any;
  product_exists: boolean;
}

export interface IHaravanFulfillment {
  created_at: string;
  id: number;
  order_id: number;
  receipt: any;
  status: string;
  tracking_company: string;
  tracking_company_code: string;
  tracking_numbers: any[];
  tracking_number: any;
  tracking_url: string;
  tracking_urls: string[];
  updated_at: string;
  line_items: IHaravanFulfillmentItem[];
  notify_customer: boolean;
  province: string;
  province_code: string;
  district: string;
  district_code: string;
  ward: string;
  ward_code: string;
  cod_amount: number;
  carrier_status_name: string;
  carrier_cod_status_name: string;
  carrier_status_code:
    | 'readytopick'
    | 'picking'
    | 'delivering'
    | 'delivered'
    | 'return'
    | 'cancel'
    | 'notmeetcustomer'
    | 'waitingforreturn';
  carrier_cod_status_code: 'codreceipt' | 'codpending';
  location_id: number;
  shipping_package: number;
  note: string;
  carrier_service_package: number;
  carrier_service_package_name: string;
  is_new_service_package: boolean;
  coupon_code: string;
  ready_to_pick_date: string;
  picking_date: string;
  delivering_date: string;
  delivered_date: string;
  return_date: string;
  not_meet_customer_date: string;
  waiting_for_return_date: string;
  cod_paid_date: string;
  cod_receipt_date: string;
  cod_pending_date: string;
  cod_not_receipt_date: string;
  cancel_date: string;
  is_view_before: string;
  country: string;
  country_code: string;
  zip_code: string;
  city: string;
  real_shipping_fee: number;
  shipping_notes: string;
  total_weight: number;
  package_length: number;
  package_width: number;
  package_height: number;
  boxme_servicecode: number;
  transport_type: number;
  address: string;
  sender_phone: string;
  sender_name: string;
  carrier_service_code: string;
  from_longtitude: number;
  from_latitude: number;
  to_longtitude: number;
  to_latitude: number;
  sort_code: string;
  is_drop_off: boolean;
  is_insurance: boolean;
  insurance_price: number;
  is_open_box: boolean;
  request_id: string;
  carrier_options: string;
  note_attributes: string;
  first_name: string;
  last_name: string;
  shipping_address: string;
  shipping_phone: string;
}

export function updateFulfillment(param: {
  orderId: string;
  id: string;
  fulfillment: PartialDeep<IHaravanFulfillment>;
  accessToken: string;
  delay?: number;
}): Promise<IHaravanFulfillment> {
  const { orderId, id, fulfillment, accessToken, delay } = param;
  const config = makeRequestConfig({
    path: `/com/orders/${orderId}/fulfillments/${id}.json`,
    method: 'PUT',
    accessToken: accessToken,
    data: { fulfillment },
    rootField: 'fulfillment',
    delay
  });
  return sendRequest(config);
}
