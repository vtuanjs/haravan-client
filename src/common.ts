import axios, { Method } from 'axios';
import axiosRetry from 'axios-retry';
import {
  HaravanError,
  HaravanNotFoundError,
  HaravanUnauthorizedError,
  HaravanInvalidArgError,
  HaravanPermissionDeniedError
} from './errors';

axiosRetry(axios, { retries: 3 });
const DELAY = 500;

export function makeRequestConfig(param: {
  url?: string;
  path?: string;
  method: Method;
  accessToken: string;
  data?: any;
  rootField?: string;
  delay?: number;
  query?: string;
}): {
  url: string;
  method: Method;
  headers: any;
  data: any;
  rootField: string;
  delay: number;
} {
  if (!param.url) {
    param.url = `https://apis.haravan.com${param.path}`;
    if (typeof param.query === 'string') param.url += `?${param.query}`;
  }

  param.url = 'https://' + param.url.replace('https://', '').replace('http://', '');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${param.accessToken}`
  };
  return {
    url: param.url,
    method: param.method,
    headers,
    data: param.data,
    rootField: param.rootField,
    delay: param.delay
  };
}

export async function sendRequest({
  url,
  method,
  headers,
  data,
  rootField,
  delay = DELAY
}: {
  url?: string;
  method: Method;
  headers: any;
  data?: any;
  rootField?: string;
  delay?: number;
}): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios({ url, method, headers, data })
        .then((response) => {
          resolve(handleResponse(response, rootField));
        })
        .catch((error) => {
          handleError(error);
        })
        .catch((error) => {
          reject(error);
        });
    }, delay);
  });
}

function handleResponse(response: any, rootField?: string) {
  if (typeof rootField === 'string') {
    return response.data[rootField];
  }
  return response.data;
}

function handleError(error: any) {
  if (error.response) {
    const status = error.response.status;
    const message =
      error.response.data && error.response.data.errors
        ? error.response.data.errors
        : error.response.statusText;

    switch (status) {
      case 401:
        throw new HaravanUnauthorizedError(message);
      case 403:
        throw new HaravanPermissionDeniedError(message);
      case 404:
        throw new HaravanNotFoundError(message);
      case 422: {
        if (message === 'Dữ liệu không tồn tại!') {
          throw new HaravanNotFoundError(message);
        }
        throw new HaravanInvalidArgError(message);
      }
      default:
        throw new HaravanError(message);
    }
  }

  throw new HaravanError();
}
