import axios from 'axios';
import { Api } from './index';

class TokenService extends Api {
  getRedirectURL() {
    const OAUTH2_REDIRECT_URI_Dev = 'http://localhost:3000/oauth2/redirect';
    const OAUTH2_REDIRECT_URI = 'https://gdsc-dju-blog.web.app/';
    return `${this.API}/oauth2/authorization/google?redirect_uri=${
      process.env.NODE_ENV === 'development'
        ? OAUTH2_REDIRECT_URI_Dev
        : OAUTH2_REDIRECT_URI
    }`;
  }
  getRefresh = (refreshToken: string, token: string) => {
    return axios.get(`${this.API}/refresh`, {
      headers: {
        Authorization: `Bearer ${token}`,
        RefreshToken: `Bearer ${refreshToken}`,
      },
    });
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
export default new TokenService();
