export const url = (category: string, page: number) => {
  if (category === 'all') {
    return `?page=${page}&size=6`;
  } else {
    return `?category=${category}&page=${page}&size=6`;
  }
};
