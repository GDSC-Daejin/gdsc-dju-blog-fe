import { memberDataInfoType } from './userDataType';

export interface detailPostDataType {
  imagePath: string;
  example: string;
  category: {
    categoryName: string;
    modifiedAt: string;
    uploadDate: string;
  };
  content: string;
  postHashTags: string;
  postId: number;
  title: string;
  memberInfo: memberDataInfoType;
}
export interface postPostDataType extends detailPostDataType {
  base64Thumbnail: string;
  fileName: string;
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
