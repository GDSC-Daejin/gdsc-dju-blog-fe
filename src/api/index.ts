import axios from 'axios';
import { MemberDataInfoType, RowMemberDataType } from '../types/userDataType';
import {
  PostPostDataType,
  RowDetailPostListType,
  RowPostDataType,
} from '../types/postData';
import Cookies from 'js-cookie';

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
        Authorization: `Bearer ${Cookies.get('token')}`,
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
  updateUserData = (userInfoData: MemberDataInfoType, token?: any) => {
    const Header = {
      headers: {
        'Access-Control-Allow-Origin': this.API,
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      baseURL: this.API,
    };
    return axios.put(`${this.API}/api/guest/v1/me`, userInfoData, {
      ...Header,
    });
  };
  getUserData = (token?: string) => {
    return axios.get<RowMemberDataType>(`${this.API}/api/guest/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  getMyPostsData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.API}/api/member/v1/${params}`,
      this.Header,
    );
  };
  getPostListData = (params: string) => {
    return axios.get<RowDetailPostListType>(`${this.API}/api/v1/${params}`);
  };
  getPostData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.API}/api/v1/post/${postId}`,
      this.Header,
    );
  };
  getMyPostData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.API}/api/member/v1/myPost/${postId}`,
      this.Header,
    );
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
  getRedirectURL() {
    const OAUTH2_REDIRECT_URI_Dev = 'http://localhost:3000/oauth2/redirect';
    const OAUTH2_REDIRECT_URI = 'https://gdsc-dju-blog.web.app/';

    return `${this.API}/oauth2/authorization/google?redirect_uri=${
      process.env.NODE_ENV === 'development'
        ? OAUTH2_REDIRECT_URI_Dev
        : OAUTH2_REDIRECT_URI
    }`;
  }
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
      this.Header,
    );
  };
  setBookMarkScrap = (postId: number) => {
    return axios.post(`${this.API}/api/member/v1/scrap/${postId}`, this.Header);
  };
  setToken = (token: string) => {
    this.Header.headers.Authorization = token;
  };
  getToken = (): string => {
    return this.Header.headers.Authorization;
  };
  getAPI = (): string => {
    return this.API;
  };
}

export default new Api();
