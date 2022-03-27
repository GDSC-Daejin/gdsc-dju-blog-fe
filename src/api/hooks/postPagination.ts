export const url = (category: string, page: number) => {
  if (category === 'all') {
    return `?page=${page}`;
  } else {
    return `?category=${category}&page=${page}`;
  }
};
