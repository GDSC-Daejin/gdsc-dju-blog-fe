import axios from 'axios';
import Cookies from 'js-cookie';

export class Api {
  protected API: string;
  protected Header: {
    headers: {
      Authorization: string;
    };
  };

  constructor() {
    this.API = 'https://api.gdsc-dju.com';
    this.Header = {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    };
  }
}

export default new Api();
