import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import GoogleLoader from '../../components/common/GoogleLoader';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import api from '../../api';

export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') ?? '';
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    (async function () {
      const result = await api.getUserData(token);
      const user = {
        role: result.data.body.data.role,
        nickname: result.data.body.data.memberInfo.nickname,
        userID: result.data.body.data.memberInfo.userID,
      };

      Cookies.set('token', token, {
        path: '/',
      });
      Cookies.set(
        'user',
        { ...user },
        {
          path: '/',
        },
      );
    })();
    navigate('/', { replace: true });
  }, []);

  return <GoogleLoader />;
}
