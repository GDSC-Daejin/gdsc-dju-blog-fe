import axios from 'axios';
import {
  PostPostDataType,
  RowDetailPostListType,
  RowPostDataType,
} from '../types/postData';
import { MemberDataInfoType, RowMemberDataType } from '../types/userDataType';
import { Api } from './index';

class UserService extends Api {
  updateMyData = (userInfoData: MemberDataInfoType, token?: any) => {
    return axios.put(`${this.API}/api/guest/v1/me`, userInfoData, {
      ...this.Header,
    });
  };
  getMyData = (token?: string) => {
    return axios.get<RowMemberDataType>(`${this.API}/api/guest/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  getMyPostsData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/myPost/${params}`,
      this.Header,
    );
  };
  getMyPostData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.API}/api/member/v1/myPost/${postId}`,
      this.Header,
    );
  };
  getMyPostsTempData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/myPost/temp${params}`,
      this.Header,
    );
  };
  getMyPostTempData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.API}/api/member/v1/myPost/temp/post/${postId}`,
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
}
export default new UserService();
