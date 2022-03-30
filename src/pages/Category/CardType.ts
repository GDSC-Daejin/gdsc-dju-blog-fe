export interface ICardData {
  memberInfo: {
    nickname: string;
  };
  category: {
    categoryName: string; //타입에 대한 수정 필요
    modifiedAt: string;
    uploadDate: string;
  };
  title: string;
  tmpStore: boolean;
  postHashTags: string;
  postId: number;
  likes: [];
  modifiedAt: string;
  uploadDate: string;
  content: string;
}
