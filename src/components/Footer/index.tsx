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
import { useNavigate } from 'react-router';

const Footer = () => {
  const navigate = useNavigate();
  const route = {
    home: '/',
    blog: '/blog', //추후 수정
    frontend: '/category/fe',
    backend: '/category/be',
    android: '/category/and',
    design: '/category/de',
    common: '/category/common',
  };
  const otherSite = {
    googleDevelopers: 'https://developers.google.com/community/gdsc',
    gdsc: 'https://gdsc.community.dev/',
    gdscdju: 'https://gdsc-dju.web.app/',
  };
  const navigateHandler = (data: string) => {
    navigate(`${route[data as keyof typeof route]}`);
  };
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
                <CreatorName
                  onClick={() => {
                    navigateHandler('home');
                  }}
                >
                  Home
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateHandler('frontend');
                  }}
                >
                  Frontend
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateHandler('backend');
                  }}
                >
                  Backend
                </CreatorName>
              </StyledTr>
              <StyledTr>
                <CreatorName
                  onClick={() => {
                    navigateHandler('android');
                  }}
                >
                  Android
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateHandler('design');
                  }}
                >
                  Design
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateHandler('common');
                  }}
                >
                  Common
                </CreatorName>
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
