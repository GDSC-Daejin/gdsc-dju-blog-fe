import { date } from 'yup';

export interface userDataType {
  generation: number;
  gitEmail: string;
  hashTag: string;
  introduce: string;
  major: string;
  memberInfoId: number;
  birthday: string | date;
  nickname: string;
  phoneNumber: string;
  positionType: string;
  studentID: string;
  userID: string;
  name: string;
  email: string;
}
export interface memberPortfolioUrlsType {
  id: number;
  webUrl: string | undefined;
}
export interface userDataExtendUrlType extends userDataType {
  memberPortfolioUrls: memberPortfolioUrlsType[];
}

export interface userEditDataType extends userDataType {
  githubUrl?: string | undefined;
  blogUrl?: string | undefined;
  resumeUrl?: string | undefined;
}
