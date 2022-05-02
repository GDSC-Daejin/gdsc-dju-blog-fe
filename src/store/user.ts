import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import API from '../api/index';

const { persistAtom } = recoilPersist();
const USER = 'user';
const USER_SELECTOR = 'userSelector';

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

export const defaultUserState = {
  id: null,
  userId: '',
  username: '',
  email: '',
  emailVerifiedYn: '',
  profileImageUrl: '',
  role: '',
  providerType: '',
  memberInfo: UserState,
  modifiedAt: '',
  uploadDate: '',
};

export const userState = atom({
  key: USER,
  default: defaultUserState,
  effects_UNSTABLE: [persistAtom],
});
