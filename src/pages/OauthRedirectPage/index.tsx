import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import GoogleLoader from '../../components/common/GoogleLoader';
import Cookies from 'js-cookie';
import api from '../../api';
import { useCookies } from 'react-cookie';

export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') ?? '';
  const [userCookies, setUserCookies] = useCookies(['user']);
  const [tokenCookies, setTokenCookies] = useCookies(['token']);

  useEffect(() => {
    (async function () {
      const result = await api.getUserData(token);
      const user = {
        role: result.data.body.data.role,
        email: result.data.body.data.email,
        nickname: result.data.body.data.memberInfo.nickname,
        userID: result.data.body.data.memberInfo.userID,
      };
      setUserCookies(
        'user',
        { ...user },
        {
          path: '/',
        },
      );
      setTokenCookies('token', token, {
        path: '/',
      });
    })();
    navigate('/', { replace: true });
  }, []);

  return <GoogleLoader />;
}
