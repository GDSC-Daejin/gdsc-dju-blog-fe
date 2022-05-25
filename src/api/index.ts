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
  getRedirectURL() {
    // const API_BASE_URL = 'https://gdsc-dju.com';
    const API_BASE_URL = 'https://gdsc-dju.kro.kr';
    const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
    return `${this.API}/oauth2/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
  }
}
export default new Api();
