export interface userDataType {
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
export interface memberDataInfoType {
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
}
