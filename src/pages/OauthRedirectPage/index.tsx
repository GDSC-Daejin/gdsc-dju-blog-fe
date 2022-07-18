import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSearchParams } from 'react-router-dom';
import { useGetMyData } from '../../api/hooks/useGetMyData';
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
  const [cookies, setCookies] = useCookies(['token', 'refresh_token', 'user']);
  const { userData } = useGetMyData();
  const setCookieData = () => {
    setCookies('token', token, {
      path: '/',
    });
    setCookies('refresh_token', refresh_token, {
      path: '/',
    });
  };

  useEffect(() => {
    if (!cookies.token && token && refresh_token) {
      setCookieData();
      TokenService.setToken(token);
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          role: userData?.role,
          username: userData?.username,
          userId: userData?.userId,
        }),
      );
    }
    if (cookies.token && cookies.refresh_token) {
      if (userData?.role.toLowerCase() === 'guest') {
        import.meta.env.MODE === 'development'
          ? (window.location.href = 'http://localhost:3000/signup')
          : (window.location.href = 'https://gdsc-dju-blog.web.app/signup');
      }
      import.meta.env.MODE === 'development'
        ? (window.location.href = 'http://localhost:3000/')
        : (window.location.href = 'https://gdsc-dju-blog.web.app/');
    }
  }, [cookies]);

  return null;
}
