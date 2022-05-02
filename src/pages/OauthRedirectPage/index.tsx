import axios from 'axios';
import React, { Suspense, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useGetUserData } from '../../api/hooks/useGetUserData';
import GoogleLoader from '../../components/common/GoogleLoader';
import { userSelector, userState } from '../../store/user';

const OauthRedirectPage = () => {
  return (
    <Suspense fallback={GoogleLoader}>
      <OauthRedirect />
    </Suspense>
  );
};

export default OauthRedirectPage;

const OauthRedirect = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';
  // Oauth redirecturl
  localStorage.setItem('token', token);
  const [selector, setSelector] = useRecoilState(userSelector);

  useEffect(() => {
    token && setSelector(selector);
    // navigate('/', { replace: true });
  }, [token]);
  return <></>;
};
