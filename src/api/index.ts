import Cookies from 'js-cookie';

export class Api {
  protected API: string;
  protected Header: {
    headers: {
      Authorization: string;
    };
  };

  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this.API = 'https://gdsc-dju.kro.kr';
    } else {
      this.API = 'https://gdsc-dju.com';
    }
    this.Header = {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    };
  }
}

export default new Api();
