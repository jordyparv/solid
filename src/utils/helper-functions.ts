export const formatPublishDate = (publishedAt: Date) => {
  return new Date(publishedAt).toLocaleString('in-en')?.split(',')[0];
};
export const removeHTMLTags = (text: string) => {
  const regex = /(<([^>]+)>)/gi;
  const result = text.replace(regex, '');
  return result;
};
export const slugMaker = (text: string) => {
  // const slug = text
  //   .replace(/\s+/g, '-')
  //   .trim()
  //   .toLowerCase()
  //   .replace(/[^a-z0-9\-]/g, '');
  const regex = /[^a-zA-Z0-9-_\u0900-\u097F]/g;
  var textWithDashes = text.replace(/ /g, '-');
  var slug = textWithDashes.replace(regex, '');
  return slug;
};
