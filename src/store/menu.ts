import { atom } from 'recoil';
const MENU = 'menu';

export const MENU_KEY = {
  APP_MENU: 'appMenu',
  NAV: 'sidebar',
};
export const MenuState = {
  [MENU_KEY.APP_MENU]: false,
  [MENU_KEY.NAV]: true,
};
export const menuState = atom<typeof MenuState>({
  key: MENU,
  default: MenuState,
});
