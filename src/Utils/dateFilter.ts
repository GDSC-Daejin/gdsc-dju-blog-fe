export const dateFilter = (date: string) => {
  const dateArray = date.slice(0, 10).split('-');
  return `${dateArray[0].slice(2, 4)}.${dateArray[1]}.${dateArray[2]}`;
};
