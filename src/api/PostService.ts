import axios from 'axios';
import { RowDetailPostListType, RowPostDataType } from '../types/postData';
import { Api } from './index';

class PostService extends Api {
  getPostsData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/v1/post/list${params}`,
    );
  };
  getPostData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.API}/api/v1/post/${postId}`,
      this.Header,
    );
  };
}
export default new PostService();
