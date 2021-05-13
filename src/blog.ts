import { makeRequestConfig, sendRequest } from './common';

export interface IHaravanBlog {
  commentable: string;
  created_at: string;
  feedburner: unknown;
  feedburner_location: unknown;
  handle: string;
  id: number;
  tags: string;
  template_suffix: string;
  title: string;
  updated_at: string;
}

export function postHaravanBlog({
  accessToken,
  blog,
  delay
}: {
  accessToken: string;
  blog: Partial<IHaravanBlog>;
  delay?: number;
}): Promise<IHaravanBlog> {
  const config = makeRequestConfig({
    path: `/web/blogs.json`,
    method: 'POST',
    accessToken,
    data: { blog },
    rootField: 'blog',
    delay
  });
  return sendRequest(config);
}

export async function getHaravanBlogs({
  accessToken,
  query,
  delay
}: {
  accessToken: string;
  query?: string;
  delay?: number;
}): Promise<IHaravanBlog[]> {
  const config = makeRequestConfig({
    path: `/web/blogs.json`,
    method: 'GET',
    accessToken,
    rootField: 'blogs',
    delay,
    query
  });

  const result = await sendRequest(config);

  if (Array.isArray(result)) {
    return result;
  }

  if (typeof result === 'object') {
    return result.Data;
  }
}
