export interface detailPostDataType {
  base64Thumbnail: string;
  example: string;
  category: {
    categoryName: string;
    modifiedAt: string;
    uploadDate: string;
  };
  content: string;
  fileName: string;
  postHashTags: string;
  thumbnail: file;
  title: string;
}
