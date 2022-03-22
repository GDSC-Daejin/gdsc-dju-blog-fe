import React from 'react';
import { sideBarMenuData } from '../../SideBar/index';
import { useNavigate } from 'react-router';
import { SideBarCircleMotion, SideBarCategoryMotion } from '../../Animation';
import {
  SideCategoryMenuWrapper,
  SideCategoryCircleWrapper,
  SideCategoryText,
  SideCategoryCircle,
  SideCategoryTextWrapper,
  SideBarGDSCLogoWrapper,
} from './styled';
import { positionColor } from '../../../../store/positionColor';
import { GDSCLogoWrapper } from '../../CategoryMenu/styled';
import GdscLogo from '../../../../Images/GdscLogo';

const SideBarCategory = ({ locationStyle }: any) => {
  const navigate = useNavigate();

  return (
    <>
      <SideCategoryMenuWrapper>
        {sideBarMenuData.map((data, id) => (
          <SideCategoryTextWrapper
            key={id}
            onClick={() => {
              navigate(`/category${data.route}`);
            }}
          >
            <SideCategoryCircleWrapper
              variants={SideBarCircleMotion}
              animate={
                locationStyle.includes(data.route) ? 'isActive' : 'isUnActive'
              }
            >
              {data.subtitle === 'all' ? (
                <SideBarGDSCLogoWrapper>
                  <GdscLogo />
                </SideBarGDSCLogoWrapper>
              ) : (
                <SideCategoryCircle color={positionColor(data.subtitle)} />
              )}
            </SideCategoryCircleWrapper>
            <SideCategoryText
              variants={SideBarCategoryMotion}
              whileHover={'isActive'}
              animate={
                locationStyle.includes(data.route) ? 'isActive' : 'isUnActive'
              }
            >
              {data.title}
            </SideCategoryText>
          </SideCategoryTextWrapper>
        ))}
      </SideCategoryMenuWrapper>
    </>
  );
};

export default SideBarCategory;
