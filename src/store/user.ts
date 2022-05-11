import { atom } from 'recoil';
import { ILoginUserData, IUserInfoDataType } from '../types/userData';

const USER = 'user';

const MemberInfoState: IUserInfoDataType = {
  generation: 0,
  userID: '',
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
  memberInfoId: 0,
  memberPortfolioUrls: [
    { id: 0, webUrl: '' },
    { id: 0, webUrl: '' },
    { id: 0, webUrl: '' },
  ],
};

const UserState: ILoginUserData = {
  id: 0,
  userId: '',
  username: '',
  email: '',
  emailVerifiedYn: '',
  profileImageUrl: '',
  role: 'GUEST' as const,
  providerType: '',
  memberInfo: MemberInfoState,
  modifiedAt: '',
  uploadDate: '',
};

export const userState = atom<ILoginUserData | null>({
  key: USER,
  default: null,
});
