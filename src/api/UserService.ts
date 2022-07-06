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
}
export default new UserService();
