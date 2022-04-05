export const url = (category: string, page: number, size?: number) => {
  const pageSize = size === undefined ? 16 : size;
  if (category === 'all') return `?page=${page}&size=${pageSize}`;
  return `/${category}?page=${page}&size=${pageSize}`;
};
