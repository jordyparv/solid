const { NEXT_PUBLIC_BASE_URL, BASE_URL } = process.env;

export async function postArticle(data: { [key: string]: any }) {
  try {
    const res = await fetch(`/api/article`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData?.data;
  } catch (e: any) {
    console.error(e);
    return [];
    // throw e;
  }
}
export async function postCategory(data: { [key: string]: any }) {
  try {
    const res = await fetch(`${BASE_URL}/api/categories`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData?.data;
  } catch (e: any) {
    console.error(e);
    return [];
    // throw e;
  }
}
