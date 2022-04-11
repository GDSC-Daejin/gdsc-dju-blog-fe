const colorList = {
  frontend: '#4385F3',
  backend: '#E94436',
  android: '#109D58',
  design: '#FABC05',
  beginner: '#FF740F',
  common: '#FF740F',
} as const;
export const positionColor = (position: string) => {
  const lowerCasePosition = position.toLowerCase();
  return colorList[lowerCasePosition as keyof typeof colorList];
};
