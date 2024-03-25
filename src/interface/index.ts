export interface ArticlePropsType {
  postType?: string;
  _id: string;
  slug: string;
  source?: {
    id?: string;
    name: string;
  };
  author?: string;
  title?: string | undefined;
  description?: string;
  url?: string;
  ImageUrl?: string;
  urlToImage?: string;
  publishedAt: Date;
  category?: string;
  content: string;
  html_content?: string;
  keywords?: string[] | undefined;
  createdAt: Date;
  updatedAt: Date;
  enable?: boolean;
  v?: any;
  [key: string]: any;
}
