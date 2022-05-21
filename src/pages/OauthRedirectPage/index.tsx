import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import GoogleLoader from '../../components/common/GoogleLoader';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') ?? '';
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://gdsc-dju.com/api/guest/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setCookie('user', result.data.body.data, {
        path: '/',
      });
    }
    fetchData();
    navigate('/', { replace: true });
  }, []);

  return <GoogleLoader />;
}
