export interface IUserDataType {
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

export interface IRowUserDataType {
  header: string;
  body: {
    data: IUserDataType;
  };
}
export interface IUserDataType {
  email: string;
  emailVerifiedYn: string;
  memberInfo: IUserDataInfoType;
  modifiedAt: string;
  password: string;
  profileImageUrl: string;
  providerType: string;
  role: string;
  uploadDate: string;
  userId: string;
  username: string;
}
export interface ILoginUserData {
  id: number;
  userId: string;
  username: string;
  email: string;
  emailVerifiedYn: string;
  profileImageUrl: string;
  role: 'GUEST' | 'MEMBER' | 'CORE' | 'LEAD';
  providerType: string;
  memberInfo: IUserDataType;
  modifiedAt: string;
  uploadDate: string;
}

export interface IUserDataInfoType {
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
  memberPortfolioUrls: IUserUrlsType[];
}

export interface IUserUrlsType {
  id: number;
  webUrl: string | undefined;
}

export interface IUserEditDataType extends IUserDataType {
  githubUrl?: string;
  blogUrl?: string;
  resumeUrl?: string;
}
