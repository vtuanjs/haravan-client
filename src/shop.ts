import { makeRequestConfig, sendRequest } from './common';

export function getShop(param: { accessToken: string; delay?: number }): Promise<any> {
  const { accessToken, delay } = param;
  const config = makeRequestConfig({
    path: '/web/shop.json',
    method: 'GET',
    accessToken,
    rootField: 'shop',
    delay
  });
  return sendRequest(config);
}
