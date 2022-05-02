import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { useGetUserData } from '../../api/hooks/useGetUserData';
import { isUserState } from '../../store/user_token';

const OauthRedirectPage = () => {
  const navigate = useNavigate();
  // Oauth redirecturl
  const [url, token] = window.location.href.split('=');
  const setIsUserState = useSetRecoilState(isUserState);

  axios
    .get('https://gdsc-dju.com/api/guest/v1/info')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  useEffect(() => {
    setIsUserState(token);
    // navigate('/', { replace: true });
  }, []);

  return <>로그인 처리중 ...</>;
};

export default OauthRedirectPage;
