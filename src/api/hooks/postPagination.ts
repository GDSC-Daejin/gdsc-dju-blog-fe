export const url = (category: string, page: number) => {
  if (category === 'all') {
    return `?page=${page}&size=6`;
  }
  if (category === 'common') {
    return `/common/?size=6&featured=true`;
  } else {
    return `/${category}?page=${page}&size=6`;
  }
};
