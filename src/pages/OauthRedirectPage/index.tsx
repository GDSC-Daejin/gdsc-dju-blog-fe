import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSearchParams } from 'react-router-dom';
import { getUserData, useGetMyData } from '../../api/hooks/useGetMyData';
import TokenService from '../../api/TokenService';
import UserService from '../../api/UserService';
import { IUserDataType } from '../../types/userDataType';

type SelectedUserType = Pick<
  IUserDataType,
  'role' | 'username' | 'userId' | 'memberInfo'
>;
export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? null;
  const refresh_token = searchParams.get('refreshToken') ?? null;
  const [cookies, setCookies] = useCookies(['token', 'refresh_token']);
  const setCookieData = () => {
    setCookies('token', token, {
      path: '/',
    });
    setCookies('refresh_token', refresh_token, {
      path: '/',
    });
  };

  useEffect(() => {
    (async function () {
      if (token) {
        const userData = await getUserData(token || '');
        TokenService.setToken(token);
        setCookieData();
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            role: userData?.role,
            username: userData?.username,
            userId: userData?.userId,
          }),
        );
        if (userData) {
          if (userData.role.toUpperCase() === 'GUEST'.toUpperCase()) {
            import.meta.env.MODE === 'development'
              ? (window.location.href = 'http://localhost:3000/signup')
              : (window.location.href = 'https://gdsc-dju-blog.web.app/signup');
          } else {
            import.meta.env.MODE === 'development'
              ? (window.location.href = 'http://localhost:3000/')
              : (window.location.href = 'https://gdsc-dju-blog.web.app/');
          }
        }
      }
    })();
  }, []);

  return null;
}
