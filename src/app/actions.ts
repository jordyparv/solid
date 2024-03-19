'use server';
export async function postArticle(formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    amount: formData.get('author'),
    status: formData.get('description'),
    source_name: formData.get('source_name'),
    publish: formData.get('publish'),
    content: formData.get('content'),
  };
  console.log(rawFormData);
}
