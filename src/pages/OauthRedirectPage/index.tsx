import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const OauthRedirectPage = () => {
  const navigate = useNavigate();
  //Oauth redirecturl
  useEffect(() => {
    async function querystring() {
      console.log('query string confirm');
      navigate('http://localhost:3000/', { replace: true });
    }
    querystring();
  }, []);
  return <></>;
};

export default OauthRedirectPage;
