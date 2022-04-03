export const url = (category: string, page: number) => {
  console.log(category);
  if (category === 'all') {
    return `?page=${page}`;
  } else {
    return `?category=${category}&page=${page}`;
  }
};
