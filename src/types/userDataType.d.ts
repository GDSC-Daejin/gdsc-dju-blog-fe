import { MemberUrlsType } from './userInfoData';

export interface UserDataType {
  email: string;
  emailVerifiedYn: string;
  memberInfo: {
    generation: number;
    gitEmail: string;
    hashTag: string;
    introduce: string;
    major: string;
    memberInfoId: number;
    birthday: string;
    memberPortfolioUrls: {
      id: number;
      webUrl: string | null;
    }[];
    nickname: string;
    phoneNumber: string;
    positionType: string;
    studentID: string;
    userID: string;
  };
  modifiedAt: string;
  password: string;
  profileImageUrl: string;
  providerType: string;
  role: string;
  uploadDate: string;
  userId: string;
  username: string;
}
export interface RowMemberDataType {
  header: string;
  body: {
    data: UserDataType;
  };
}
export interface MemberDataInfoType {
  generation: number;
  gitEmail: string;
  hashTag: string;
  introduce: string;
  major: string;
  memberInfoId: number;
  birthday: string;
  nickname: string;
  phoneNumber: string;
  positionType: string;
  studentID: string;
  userID: string;
  name: string;
  email: string;
  memberPortfolioUrls: MemberUrlsType[];
}
