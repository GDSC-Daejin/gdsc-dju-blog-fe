import axios from 'axios';
import { userDataType } from '../type/userDataType';

export class Api {
  private API: string;
  constructor() {
    this.API = 'https://gdsc-dju.com';
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
  getUserData = () => {
    return axios.get<userDataType>(`${this.API}/user/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  };
}
export default new Api();
