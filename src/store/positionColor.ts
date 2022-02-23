export const positionColor = (position?: string) => {
  switch (position) {
    case 'frontend':
      return '#4385F3';
    case 'backend':
      return '#E94436';
    case 'android':
      return '#109D58';
    case 'design':
      return '#FABC05';
    case 'beginner':
      return '#FF740F';
    default:
      return '#fff';
  }
};
