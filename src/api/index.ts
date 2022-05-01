import axios from 'axios';
import { MemberDataInfoType, RowMemberDataType } from '../types/userDataType';
import {
  PostPostDataType,
  RowDetailPostListType,
  RowPostDataType,
} from '../types/postData';

export class Api {
  private API: string;
  private Header: { Authorization: string };

  constructor() {
    this.API = 'https://gdsc-dju.com';
    this.Header = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  postForceLogin = () => {
    return axios
      .post(`${this.API}/test/auth/login`, {
        id: 'gudcks0305',
        password: '$10$8lDyClwH.ET3BA44inQLKuRNISg4paTPwgD2V5pw/RMmtTGJvhPvy',
      })
      .then((res) => {
        localStorage.setItem('token', res.data.body.token);
      });
  };
  updateUserData = (userInfoData: MemberDataInfoType) => {
    return axios.put(`${this.API}/api/guest/v1/me`, userInfoData, {
      headers: this.Header,
    });
  };
  getUserData = () => {
    return axios.get<RowMemberDataType>(`${this.API}/api/guest/v1/me`, {
      headers: this.Header,
    });
  };
  getUserPostListData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/${params}`,
      {
        headers: this.Header,
      },
    );
  };
  getPostListData = (params: string) => {
    return axios.get<RowDetailPostListType>(`${this.API}/api/v1/${params}`);
  };
  getPostData = (postId: string) => {
    return axios.get<RowPostDataType>(`${this.API}/api/v1/post/${postId}`);
  };

  getUserScrapData = () => {
    return axios.get(`${this.API}/api/member/v1/myScrap`, {
      headers: this.Header,
    });
  };
  updateUserScrapData = (postId: string) => {
    return axios.post(`${this.API}/api/member/v1/myScrap${postId}`, {
      headers: this.Header,
    });
  };
  postPostData = (postData: PostPostDataType) => {
    return axios.post(`${this.API}/api/member/v2/post`, postData, {
      headers: this.Header,
    });
  };
  deletePostData = (postId: string) => {
    return axios.delete(`${this.API}/api/member/v2/post/${postId}`, {
      headers: this.Header,
    });
  };
  updatePostData = (postData: PostPostDataType, postId: string) => {
    return axios.put(`${this.API}/api/member/v2/post/${postId}`, postData, {
      headers: this.Header,
    });
  };
}
export default new Api();
