export const formatPublishDate = (publishedAt: Date) => {
  return new Date(publishedAt).toLocaleString('in-en')?.split(',')[0];
};
