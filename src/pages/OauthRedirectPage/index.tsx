import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSearchParams } from 'react-router-dom';
import TokenService from '../../api/TokenService';
import UserService from '../../api/UserService';
import { IUserDataType } from '../../types/userDataType';

type SelectedUserType = Pick<
  IUserDataType,
  'role' | 'username' | 'userId' | 'memberInfo'
>;
export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';
  const refresh_token = searchParams.get('refreshToken') ?? '';
  const [cookies, setCookies] = useCookies(['token', 'refresh_token', 'user']);
  const setCookieData = (user: SelectedUserType) => {
    setCookies(
      'user',
      { ...user },
      {
        path: '/',
      },
    );
    setCookies('token', token, {
      path: '/',
    });
    setCookies('refresh_token', refresh_token, {
      path: '/',
    });
  };

  useEffect(() => {
    (async function () {
      const result = await UserService.getMyData(token);
      const data = result.data.body.data;
      setCookieData({
        role: data.role,
        username: data.username,
        userId: data.userId,
        memberInfo: data.memberInfo,
      });
      TokenService.setToken(token);
    })();
    cookies.token &&
      (import.meta.env.MODE === 'development'
        ? (window.location.href = 'http://localhost:3000/')
        : (window.location.href = 'https://gdsc-dju-blog.web.app/'));
  }, [cookies]);

  return null;
}
