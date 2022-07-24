import axios from 'axios';
import {
  PostPostDataType,
  RowDetailPostListType,
  RowPostDataType,
} from '../types/postData';
import Cookies from 'js-cookie';
import { Api } from './index';

class PostService extends Api {
  //전체 포스트
  getPostData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.API}/api/v1/post/${postId}`,
      this.Header,
    );
  };
  getPostsData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/v1/post/list${params}`,
    );
  };
  //내 포스트
  getMyPostData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.API}/api/member/v1/myPost/${postId}`,
      this.Header,
    );
  };
  getMyPostsData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/myPost/${params}`,
      this.Header,
    );
  };

  getMyPostsTempData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/myPost/temp${params}`,
      this.Header,
    );
  };
  getMyPostsNotTempData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/myPost/notTemp${params}`,
      this.Header,
    );
  };
  postMyPostData = (postData: PostPostDataType) => {
    return axios.post(`${this.API}/api/member/v2/post`, postData, this.Header);
  };
  updateMyPostData = (postData: PostPostDataType, postId: string) => {
    return axios.put(
      `${this.API}/api/member/v2/post/${postId}`,
      postData,
      this.Header,
    );
  };
  deleteMyPostData = (postId: string) => {
    return axios.delete(
      `${this.API}/api/member/v2/post/${postId}`,
      this.Header,
    );
  };
  getMyScrapData = () => {
    return axios.get(`${this.API}/api/member/v1/myScrap`, this.Header);
  };
  updateMyScrapData = (postId: string) => {
    return axios.post(
      `${this.API}/api/member/v1/myScrap${postId}`,
      this.Header,
    );
  };
  getSearchPosts = (postContent: string) => {
    return axios.get(
      `https://gdsc-dju.kro.kr/api/v1/post/search/${postContent}`,
    );
  };
  setBookMarkPost = (postId: number) => {
    const token = Cookies.get('token');

    return axios.post(
      `https://gdsc-dju.kro.kr/api/member/v1/scrap/${postId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };
}
export default new PostService();
