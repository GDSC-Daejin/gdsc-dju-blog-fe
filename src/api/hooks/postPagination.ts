<<<<<<< HEAD
export const url = (category: string, page: number, size?: number) => {
  const pageSize = size === undefined ? 16 : size;
  if (category === 'all') return `?page=${page}&size=${pageSize}`;
  return `/${category}?page=${page}&size=${pageSize}`;
=======
const category = {
  fe: 'frontend',
  be: 'backend',
  de: 'design',
  common: 'common',
  and: 'android',
  frontend: 'frontend',
  backend: 'backend',
  design: 'design',
  android: 'android',
} as const;

export const url = (tage: string, page: number, size = 16) => {
  if (tage === 'all') {
    return `?page=${page}&size=${size}`;
  } else {
    return `/${
      category[tage as keyof typeof category]
    }?page=${page}&size=${size}`;
  }
>>>>>>> develop
};
