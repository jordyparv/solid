const { BASE_URL } = process.env;
import { unstable_noStore as noStore } from 'next/cache';
// const fetchFunctionConfig = {
//   next: { revalidate: 30 },
// };
const fetchFunctionConfig = {};
export async function getArticles({
  limit = 50,
  excludeSlug = '',
  by_category = 0,
  post_type = '',
} = {}) {
  noStore();
  try {
    const res = await fetch(
      `${BASE_URL}/api/article?limit=${limit}&exclude_slug=${excludeSlug}&by_category=${by_category}&post_type=${post_type}`,
      fetchFunctionConfig
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(e);
    return [];
    // throw e;
  }
}
export async function getHeadline() {
  try {
    noStore();
    const res = await fetch(`${BASE_URL}/api/headline`, fetchFunctionConfig);
    const { data } = await (await res).json();
    return data;
  } catch (e: any) {
    console.error(e);
    return [];
    // throw e;
  }
}

export async function getPostBySlug(slug: string) {
  try {
    noStore();
    const res = await fetch(
      `${BASE_URL}/api/article/${slug}/`,
      fetchFunctionConfig
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(e);
    return [];
    // throw e;
  }
}
export async function getArticlesByCategory(slug: string) {
  try {
    noStore();
    const res = await fetch(
      `${BASE_URL}/api/article/category/${slug}/`,
      fetchFunctionConfig
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(e);
    return [];
    // throw e;
  }
}

export async function getCategories({
  serverSide = true,
}: {
  serverSide: Boolean;
}) {
  try {
    noStore();
    let res = null;
    if (serverSide) {
      res = await fetch(`${BASE_URL}/api/categories`, fetchFunctionConfig);
    } else {
      res = await fetch(`/api/categories`, fetchFunctionConfig);
    }
    const data = await res.json();
    return data;
  } catch (e: any) {
    return [];
    // throw e;
  }
}
