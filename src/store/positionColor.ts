const colorList = {
  frontend: '#4385F3',
  backend: '#E94436',
  android: '#109D58',
  design: '#FABC05',
  beginner: '#FF740F',
};
export const positionColor = (position?: string) => {
  return colorList[position?.toLowerCase() as keyof typeof colorList];
};
