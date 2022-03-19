import React from 'react';
import { FormImage, FormImageWrapper, ImageText } from './styled';

const ProfileEditImage = (props: { image: string }) => {
  const { image } = props;
  return (
    <FormImageWrapper>
      <ImageText>편집</ImageText>
      {image ? (
        <FormImage src={image} />
      ) : (
        <FormImage src={'https://www.w3schools.com/howto/img_avatar.png'} />
      )}
    </FormImageWrapper>
  );
};

export default ProfileEditImage;
