import axios from 'axios';
import { userDataType } from '../types/userDataType';
import { userInfoDataType } from '../types/userInfoData';

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
  updateUserData = (userInfoData: userDataType) => {
    return axios.put(`${this.API}/api/member/v1/update/me`, userInfoData, {
      headers: this.Header,
    });
  };
  getUserData = () => {
    return axios.get<userDataType>(`${this.API}/user/me`, {
      headers: this.Header,
    });
  };
}
export default new Api();
