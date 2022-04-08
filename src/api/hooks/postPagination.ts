const category = {
  fe: 'frontend',
  be: 'backend',
  de: 'design',
  common: 'common',
  and: 'android',
} as const;

export const url = (tage: string, page: number, size = 16) => {
  if (tage === 'all') {
    return `?page=${page}&size=${size}`;
  } else {
    return `/${
      category[tage as keyof typeof category]
    }?page=${page}&size=${size}`;
  }
};
