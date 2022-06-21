import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import GoogleLoader from '../../components/common/GoogleLoader';
import Cookies from 'js-cookie';
import api from '../../api';
import { useCookies } from 'react-cookie';
import { IUserDataType } from '../../types/userDataType';

type SelectedUserType = Pick<
  IUserDataType,
  'role' | 'username' | 'userId' | 'memberInfo'
>;
export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') ?? '';
  const [userCookies, setUserCookies] = useCookies(['user']);
  const [tokenCookies, setTokenCookies] = useCookies(['token']);

  const setCookieData = (user: SelectedUserType) => {
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
  };

  useEffect(() => {
    (async function () {
      const result = await api.getUserData(token);
      const data = result.data.body.data;
      setCookieData({
        role: data.role,
        username: data.username,
        userId: data.userId,
        memberInfo: data.memberInfo,
      });
    })();
    navigate('/', { replace: true });
  }, []);

  return <GoogleLoader />;
}
