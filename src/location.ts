import { makeRequestConfig, sendRequest } from './common';

export function getHaravanLocations(param: {
  accessToken: string;
  query?: string;
  delay?: number;
}): Promise<any> {
  const { accessToken, query, delay } = param;
  const config = makeRequestConfig({
    path: `/com/locations.json`,
    method: 'GET',
    accessToken,
    rootField: 'locations',
    delay,
    query
  });

  return sendRequest(config);
}
