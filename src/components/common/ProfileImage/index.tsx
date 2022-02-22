import React from 'react';
import { PositionCircle, StyledImage, StyledImageWrapper } from './styled';

type Props = { image: string; position?: string };
const ProfileImage = (props: Props) => {
  const { image, position } = props;
  const positionColor = () => {
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

  return (
    <StyledImageWrapper>
      <PositionCircle color={positionColor()} />
      <StyledImage src={image} />
    </StyledImageWrapper>
  );
};

export default ProfileImage;
