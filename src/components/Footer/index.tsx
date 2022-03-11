import React from 'react';
import {
  BlogIconWrapper,
  ColumnWrapper,
  Copyright,
  CreatorName,
  CreatorSection,
  CreatorSectionInner,
  CreatorTitle,
  CreatorWrapper,
  FooterInner,
  FooterWrapper,
  StyledColumn,
  StyledTr,
} from './styled';
import BlogIcon from '../../Images/BlogIcon';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <CreatorWrapper>
          <BlogIconWrapper>
            <BlogIcon />
          </BlogIconWrapper>
          <CreatorSection>
            <CreatorTitle>Designed by</CreatorTitle>
            <ColumnWrapper>
              <CreatorName>Blaire</CreatorName>
              <CreatorName>Gunzo</CreatorName>
              <CreatorName>Cindy</CreatorName>
            </ColumnWrapper>
          </CreatorSection>
          <CreatorSection>
            <CreatorTitle>Created by</CreatorTitle>
            <CreatorSectionInner>
              <StyledTr>
                <CreatorName>Jason</CreatorName>
                <CreatorName>Gabi</CreatorName>
                <CreatorName>Chois</CreatorName>
              </StyledTr>
              <StyledTr>
                <CreatorName>Rocoli</CreatorName>
                <CreatorName>Marine</CreatorName>
                <CreatorName>Reese</CreatorName>
              </StyledTr>
            </CreatorSectionInner>
          </CreatorSection>
          <StyledColumn />
          <CreatorSection>
            <CreatorTitle>Site Map</CreatorTitle>
            <CreatorSectionInner>
              <StyledTr>
                <CreatorName>Home</CreatorName>
                <CreatorName>Frontend</CreatorName>
                <CreatorName>Backend</CreatorName>
              </StyledTr>
              <StyledTr>
                <CreatorName>Android</CreatorName>
                <CreatorName>Design</CreatorName>
                <CreatorName>Common</CreatorName>
              </StyledTr>
            </CreatorSectionInner>
          </CreatorSection>
          <CreatorSection>
            <CreatorTitle>Family site</CreatorTitle>
            <StyledTr>
              <CreatorName style={{ width: '120px' }}>
                Google Developers
              </CreatorName>
              <CreatorName>GDSC</CreatorName>
              <CreatorName>GDSC DJU</CreatorName>
            </StyledTr>
          </CreatorSection>
          <Copyright>Copyright© GDSC Daejin 2021</Copyright>
        </CreatorWrapper>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
