import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
const USER = 'user';

export const UserState = {
  name: '',
  nickname: '',
  introduce: '',
  hashTag: '',
  phoneNumber: '',
  email: '',
  major: '',
  studentID: '',
  positionType: '',
  gitEmail: '',
  birthday: '',
  userInfoId: 0,
  memberPortfolioUrls: [
    { id: 0, webUrl: '' },
    { id: 0, webUrl: '' },
    { id: 0, webUrl: '' },
  ],
};
export const userState = atom({
  key: USER,
  default: UserState,
  effects_UNSTABLE: [persistAtom],
});