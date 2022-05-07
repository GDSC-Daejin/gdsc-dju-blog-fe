import React from 'react';
import { sideBarMenuData } from '../../SideBar/index';
import { useLocation, useNavigate } from 'react-router';
import {
  SideBarCategoryAnimation,
  SideBarCircleAnimation,
} from '../../Animation';
import {
  SideBarGDSCLogoWrapper,
  SideCategoryCircle,
  SideCategoryCircleWrapper,
  SideCategoryMenuWrapper,
  SideCategoryText,
  SideCategoryTextWrapper,
} from './styled';
import { positionColor } from '../../../../store/positionColor';
import GdscLogo from '../../../../assets/GdscLogo';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';

const SideBarCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useRecoilState(menuState);

  const sideBarAnimate = (category: string) => {
    return location.pathname.includes(category) ? 'isActive' : 'isUnActive';
  };
  return (
    <>
      <SideCategoryMenuWrapper>
        {sideBarMenuData.map((data, id) => (
          <SideCategoryTextWrapper
            key={id}
            onClick={() => {
              navigate(`/category/${data.title}`);
              setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
            }}
          >
            <SideCategoryCircleWrapper
              variants={SideBarCircleAnimation}
              animate={sideBarAnimate(data.subtitle)}
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
              variants={SideBarCategoryAnimation}
              whileHover={'isActive'}
              animate={sideBarAnimate(data.subtitle)}
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
