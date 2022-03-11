export interface userDataType {
  email: string;
  emailVerifiedYn: string;
  memberInfo: {
    gitEmail: string;
    hashTag: string;
    introduce: string;
    major: string;
    memberInfoId: number;
    memberScrapPostList: [
      {
        id: number;
        post: {
          content: string;
          imagePath: string;
          modifiedAt: string;
          postHashTags: [
            {
              post_HashTag_ID: number;
              tag: string;
            },
          ];
          postId: number;
          title: string;
          tmpStore: boolean;
          uploadDate: string;
        };
        uploadDate: string;
      },
    ];
    mypost: [
      {
        content: string;
        imagePath: string;
        modifiedAt: string;
        postHashTags: [
          {
            post_HashTag_ID: number;
            tag: string;
          },
        ];
        postId: number;
        title: string;
        tmpStore: boolean;
        uploadDate: string;
      },
    ];
    nickName: string;
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
