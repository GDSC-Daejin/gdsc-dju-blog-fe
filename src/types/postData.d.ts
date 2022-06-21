import { MemberDataInfoType } from './userData';

export interface DetailPostDataType {
  modifiedAt: string;
  uploadDate: string;
  example: string;
  category: {
    categoryName: string;
    uploadDate: string;
  };
  content: string;
  postHashTags: string;
  postId: number;
  title: string;
  likes: string[];
  imagePath: string;
  memberInfo: AuthorProps;
}

export interface AuthorProps {
  member: {
    profileImageUrl: string;
  };
  nickname: string;
}

export interface RowPostDataType {
  body: {
    data: DetailPostDataType;
  };
}
export interface PostPostDataType {
  base64Thumbnail: string;
  fileName: string;
  title: string;
  category: {
    categoryName: string;
  };
  content: string;
  postHashTags: string;
  tmpStore: boolean;
}
export interface RowDetailPostListType {
  body: {
    data: {
      content: DetailPostDataType[];
      totalElements: number;
      totalPages: number;
      empty: boolean;
      first: boolean;
      last: boolean;
    };
  };
}
