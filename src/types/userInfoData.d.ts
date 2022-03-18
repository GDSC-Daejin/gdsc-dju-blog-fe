import { date } from 'yup';

export interface userInfoDataType {
  generation: number;
  gitEmail: string;
  hashTag: string;
  introduce: string;
  major: string;
  memberInfoId: number;
  birthday: string | date;
  memberPortfolioUrls: {
    id: number;
    webUrl: string;
  }[];
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
  webUrl: string;
  memberInfo: number;
}
