import { makeRequestConfig, sendRequest } from './common';
import { PartialDeep } from './type';

export interface IHaravanArticle {
  author: string;
  blog_id: number;
  body_html: string;
  created_at: string;
  id: number;
  published: boolean;
  published_at: string;
  summary_html: string;
  tags: string;
  template_suffix: string;
  title: string;
  updated_at: string;
  user_id: number;
  handle: string;
  page_title: string;
  meta_description: string;
  image: {
    src: string;
    attachment: string;
    filename: string;
    created_at: string;
  };
}

export function postHaravanArticle({
  accessToken,
  article,
  delay,
  blogId
}: {
  accessToken: string;
  article: PartialDeep<IHaravanArticle>;
  delay?: number;
  blogId: string;
}): Promise<IHaravanArticle> {
  const config = makeRequestConfig({
    path: `/web/blogs/${blogId}/articles.json`,
    method: 'POST',
    accessToken,
    data: { article },
    rootField: 'article',
    delay
  });
  return sendRequest(config);
}

export function getHaravanArticles({
  accessToken,
  query,
  delay,
  blogId
}: {
  accessToken: string;
  query?: string;
  delay?: number;
  blogId: string;
}): Promise<IHaravanArticle[]> {
  const config = makeRequestConfig({
    path: `/web/blogs/${blogId}/articles.json`,
    method: 'GET',
    accessToken,
    rootField: 'article',
    delay,
    query
  });
  return sendRequest(config);
}
