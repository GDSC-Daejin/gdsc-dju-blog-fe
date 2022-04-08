export const url = (category: string, page: number, size = 16) => {
  if (category === 'all') {
    return `?page=${page}&size=${size}`;
  } else {
    return `/${category}?page=${page}&size=${size}`;
  }
};
