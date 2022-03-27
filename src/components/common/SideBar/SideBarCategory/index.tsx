import React from 'react';
import { sideBarMenuData } from '../../SideBar/index';
import { useNavigate } from 'react-router';
import {
  SideBarCircleAnimation,
  SideBarCategoryAnimation,
} from '../../Animation';
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
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';

const SideBarCategory = ({ locationStyle }: any) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useRecoilState(menuState);

  return (
    <>
      <SideCategoryMenuWrapper>
        {sideBarMenuData.map((data, id) => (
          <SideCategoryTextWrapper
            key={id}
            onClick={() => {
              navigate(`/category${data.route}`);
              setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
            }}
          >
            <SideCategoryCircleWrapper
              variants={SideBarCircleAnimation}
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
              variants={SideBarCategoryAnimation}
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
