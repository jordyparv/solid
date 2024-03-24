export const formatPublishDate = (publishedAt: Date) => {
  return new Date(publishedAt).toLocaleString('in-en')?.split(',')[0];
};
export const removeHTMLTags = (text: string) => {
  const regex = /(<([^>]+)>)/gi;
  const result = text.replace(regex, '');
  return result;
};
export const slugMaker = (text: string) => {
  const slug = text.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return slug;
};
