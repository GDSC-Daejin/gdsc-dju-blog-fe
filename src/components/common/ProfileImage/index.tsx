import React, { memo } from 'react';
import { positionColor } from '../../../store/positionColor';
import { PositionCircle, StyledImage, StyledImageWrapper } from './styled';

type Props = { image: string; position: string };
const ProfileImage = (props: Props) => {
  const { image, position } = props;
  const imageUrl = image.replace('=s96-c', '');
  return (
    <StyledImageWrapper>
      <PositionCircle color={positionColor(position)} />
      <StyledImage src={imageUrl} />
    </StyledImageWrapper>
  );
};

export default memo(ProfileImage);
