import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const OauthRedirectPage = () => {
  const navigate = useNavigate();
  //Oauth redirecturl
  // useEffect(() => {
  //   async function querystring() {
  //     console.log('query string confirm');
  //     // navigate('/', { replace: true });
  //   }
  //   querystring();
  // }, []);
  useEffect(() => {
    async function getUserList() {
      // /api/adimn / v1 / all / list;
      const response = await axios.get(
        'https://gdsc-dju.com/api/admin/v1/all/list',
      );
      console.log(response);
    }
    getUserList();
    // navigate('/', { replace: true });
  }, []);
  return <>로그인 처리중 ...</>;
};

export default OauthRedirectPage;
