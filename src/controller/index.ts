import { md5 } from '@/utils/md5';

const { BASE_URL } = process.env;
export async function getArticles() {
  try {
    const res = fetch(`${BASE_URL}/api/article?limit=50`, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    const { data } = await (await res).json();
    return data;
  } catch (e: any) {
    console.log(e);
  }
}
export async function getHeadline() {
  try {
    const res = fetch(`${BASE_URL}/api/headline`);
    const { data } = await (await res).json();
    return data;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
}

export async function getPostBySlug(title: string) {
  try {
    let slug = title.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    slug = md5(slug);
    const res = fetch(`${BASE_URL}/api/article/${slug}/`);
    const { data } = await (await res).json();
    return data;
  } catch (e: any) {
    console.log(e);
  }
}
