import axios from 'axios';
import { MemberDataInfoType, RowMemberDataType } from '../types/userDataType';
import {
  PostPostDataType,
  RowDetailPostListType,
  RowPostDataType,
} from '../types/postData';

export class Api {
  private API: string;

  private Header: {
    headers: {
      'Access-Control-Allow-Origin': string;
      Authorization: string;
    };
    baseURL: string;
    withCredentials: boolean;
  };

  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this.API = 'https://gdsc-dju.kro.kr';
    } else {
      this.API = 'https://gdsc-dju.com';
    }
    this.Header = {
      headers: {
        'Access-Control-Allow-Origin': this.API,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      withCredentials: true,
      baseURL: this.API,
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
    return axios.put(`${this.API}/api/guest/v1/me`, userInfoData, this.Header);
  };
  getUserData = () => {
    return axios.get<RowMemberDataType>(
      `${this.API}/api/guest/v1/me`,
      this.Header,
    );
  };
  getUserPostListData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/${params}`,
      this.Header,
    );
  };
  getPostListData = (params: string) => {
    return axios.get<RowDetailPostListType>(`${this.API}/api/v1/${params}`);
  };
  getPostData = (postId: string) => {
    return axios.get<RowPostDataType>(`${this.API}/api/v1/post/${postId}`);
  };

  getUserScrapData = () => {
    return axios.get(`${this.API}/api/member/v1/myScrap`, this.Header);
  };
  updateUserScrapData = (postId: string) => {
    return axios.post(
      `${this.API}/api/member/v1/myScrap${postId}`,
      this.Header,
    );
  };
  postPostData = (postData: PostPostDataType) => {
    return axios.post(`${this.API}/api/member/v2/post`, postData, this.Header);
  };
  deletePostData = (postId: string) => {
    return axios.delete(
      `${this.API}/api/member/v2/post/${postId}`,
      this.Header,
    );
  };
  updatePostData = (postData: PostPostDataType, postId: string) => {
    return axios.put(
      `${this.API}/api/member/v2/post/${postId}`,
      postData,
      this.Header,
    );
  };
  getUserPostListTempData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/${params}`,
      this.Header,
    );
  };
  getPostTempData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.API}/api/member/v1/myPost/temp/post/${postId}`,
    );
  };
}
export default new Api();
