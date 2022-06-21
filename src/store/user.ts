import { atom } from 'recoil';
import { ILoginUserData, IUserInfoDataType } from '../types/userData';

const USER = 'user';

export const MemberInfoState = {
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
  githubUrl: '',
  blogUrl: '',
  etcUrl: '',
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
