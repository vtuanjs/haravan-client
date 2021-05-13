import { makeRequestConfig, sendRequest } from './common';

export interface IHaravanCustomCollection {
  body_html: string;
  handle: string;
  image: {
    src: string;
    created_at: string;
    alt: string;
  } | null;
  id: number;
  published: boolean;
  published_at: string;
  published_scope: 'global' | 'web';
  sort_order: string;
  template_suffix: string;
  title: string;
  updated_at: string;
}

export function putHaravanCustomCollection(param: {
  accessToken: string;
  customCollection: Partial<IHaravanCustomCollection>;
  delay?: number;
  id: string;
}): Promise<IHaravanCustomCollection> {
  const { accessToken, customCollection, delay, id } = param;
  const config = makeRequestConfig({
    path: `/com/custom_collections/${id}.json`,
    method: 'PUT',
    accessToken,
    data: { custom_collection: customCollection },
    rootField: 'custom_collection',
    delay
  });
  return sendRequest(config);
}

export function deleteHaravanCustomCollection(param: {
  accessToken: string;
  id: string;
  delay?: number;
}): Promise<IHaravanCustomCollection> {
  const { accessToken, id, delay } = param;
  const config = makeRequestConfig({
    path: `/com/custom_collections/${id}.json`,
    method: 'DELETE',
    accessToken,
    delay
  });
  return sendRequest(config);
}

export function postHaravanCustomCollection(param: {
  accessToken: string;
  customCollection: Partial<IHaravanCustomCollection>;
  delay?: number;
}): Promise<IHaravanCustomCollection> {
  const { accessToken, customCollection, delay } = param;
  const config = makeRequestConfig({
    path: '/com/custom_collections.json',
    method: 'POST',
    accessToken,
    data: { custom_collection: customCollection },
    rootField: 'custom_collection',
    delay
  });
  return sendRequest(config);
}

export function getHaravanCustomCollection(param: {
  accessToken: string;
  query?: string;
  delay?: number;
  id: string;
}): Promise<IHaravanCustomCollection> {
  const { accessToken, query, delay, id } = param;
  const config = makeRequestConfig({
    path: `/com/custom_collections/${id}.json`,
    method: 'GET',
    accessToken,
    rootField: 'custom_collection',
    delay,
    query
  });

  return sendRequest(config);
}

export function getHaravanCustomCollections(param: {
  accessToken: string;
  query: string;
  delay?: number;
}): Promise<IHaravanCustomCollection[]> {
  const { accessToken, query, delay } = param;
  const config = makeRequestConfig({
    path: '/com/custom_collections.json',
    method: 'GET',
    accessToken,
    rootField: 'custom_collections',
    delay,
    query
  });

  return sendRequest(config);
}

export function countHaravanCustomCollections(param: {
  accessToken: string;
  delay?: number;
}): Promise<{ count: number }> {
  const { accessToken, delay } = param;
  const config = makeRequestConfig({
    path: '/com/custom_collections/count.json',
    method: 'GET',
    accessToken,
    delay
  });

  return sendRequest(config);
}
