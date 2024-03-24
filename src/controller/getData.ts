import { md5 } from '@/utils/md5';

const { BASE_URL } = process.env;

const fetchFunctionConfig = {
  next: { revalidate: 30 },
};
export async function getArticles({
  limit = 50,
  excludeSlug = '',
  by_category = 0,
  post_type = '',
} = {}) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/article?limit=${limit}&exclude_slug=${excludeSlug}&by_category=${by_category}&post_type=${post_type}`,
      fetchFunctionConfig
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
}
export async function getHeadline() {
  try {
    const res = await fetch(`${BASE_URL}/api/headline`, fetchFunctionConfig);
    const { data } = await (await res).json();
    return data;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/article/${slug}/`,
      fetchFunctionConfig
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
}
export async function getArticlesByCategory(slug: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/article/category/${slug}/`,
      fetchFunctionConfig
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
}

export async function getCategories({
  serverSide = true,
}: {
  serverSide: Boolean;
}) {
  try {
    let res = null;
    if (serverSide) {
      res = await fetch(`${BASE_URL}/api/categories`, fetchFunctionConfig);
    } else {
      res = await fetch(`/api/categories`, fetchFunctionConfig);
    }
    const data = await res.json();
    return data;
  } catch (e: any) {
    throw e;
  }
}
