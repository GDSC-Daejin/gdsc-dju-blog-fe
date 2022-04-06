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
  uploadDate: string;
  modifiedAt: string;
}
// {
//   "memberInfo": {
//       "member": {
//           "profileImageUrl": "gel["
//       },
//       "nickname": null
//   },
//   "postHashTags": "hi,h,h,h,h",
//   "category": {
//       "categoryName": "Backend",
//       "modifiedAt": "2022-04-01T15:45:22.4",
//       "uploadDate": "2022-04-01T15:45:22.405"
//   },
//   "title": "제목9",
//   "tmpStore": false,
//   "postId": 9,
//   "likes": [],
//   "modifiedAt": "2022-04-01T06:46:13.645+00:00",
//   "uploadDate": "2022-04-01T06:46:13.646+00:00",
//   "content": "내용"
// }
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
