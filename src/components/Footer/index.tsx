import React from 'react';
import {
  CreatorName,
  CreatorSection,
  CreatorTitle,
  CreatorWrapper,
  FooterWrapper,
} from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <CreatorWrapper>
        <CreatorSection>
          <CreatorTitle>Designed by</CreatorTitle>
          <CreatorName>Blaire</CreatorName>
          <CreatorName>Gunzo</CreatorName>
          <CreatorName>Cindy</CreatorName>
        </CreatorSection>
        <CreatorSection>
          <CreatorTitle>Created by</CreatorTitle>
          <CreatorName>Jason</CreatorName>
          <CreatorName>Gabi</CreatorName>
          <CreatorName>Chois</CreatorName>
          <CreatorName>Rocoli</CreatorName>
          <CreatorName>Marine</CreatorName>
          <CreatorName>Reese</CreatorName>
        </CreatorSection>
      </CreatorWrapper>
    </FooterWrapper>
  );
};

export default Footer;
