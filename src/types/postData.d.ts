import { memberDataInfoType } from './userDataType';

export interface detailPostDataType {
  imagePath: string;
  example: string;
  category: {
    categoryName: string;
    uploadDate: string;
  };
  content: string;
  postHashTags: string;
  postId: number;
  title: string;
  memberInfo: memberDataInfoType;
}
export interface postPostDataType {
  base64Thumbnail: string;
  fileName: string;
  title: string;
  category: {
    categoryName: string;
  };
  content: string;
  postHashTags: string;
}
export interface rowDetailPostDataType {
  body: {
    data: {
      content: detailPostDataType[];
      totalElements: number;
      totalPages: number;
      empty: boolean;
      first: boolean;
      last: boolean;
    };
  };
}
