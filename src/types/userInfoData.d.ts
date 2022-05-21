import { date } from 'yup';

export interface UserDataType {
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
}
export interface MemberUrlsType {
  id: number;
  webUrl: string | undefined;
}
export interface UserDataExtendUrlType extends UserDataType {
  memberPortfolioUrls: memberUrlsType[];
}

export interface UserEditDataType extends UserDataType {
  githubUrl?: string;
  blogUrl?: string;
  resumeUrl?: string;
}
