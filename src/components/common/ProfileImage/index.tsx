import React from 'react';
import { positionColor } from '../../../store/positionColor';
import { PositionCircle, StyledImage, StyledImageWrapper } from './styled';

type Props = { image: string; position?: string };
const ProfileImage = (props: Props) => {
  const { image, position } = props;

  return (
    <StyledImageWrapper>
      <PositionCircle color={positionColor(position)} />
      <StyledImage src={image} />
    </StyledImageWrapper>
  );
};

export default ProfileImage;
