export interface userInfoDataType {
  generation: number;
  gitEmail: string;
  hashTag: string;
  introduce: string;
  major: string;
  memberInfoId: number;
  birthday: string;
  memberPortfolioUrls: [
    {
      id: number;
      webUrl: string;
    },
  ];
  nickname: string;
  phoneNumber: string;
  positionType: string;
  studentID: string;
  userID: string;
}
