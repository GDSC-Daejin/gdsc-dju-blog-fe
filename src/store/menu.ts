import { atom } from 'recoil';
const MENU = 'menu';

export const MENU_KEY = {
  APPMENU: 'appMenu',
  NAV: 'sidebar',
};
export const MenuState = {
  [MENU_KEY.APPMENU]: true,
  [MENU_KEY.NAV]: true,
};
export const menuState = atom<typeof MenuState>({
  key: MENU,
  default: MenuState,
});
