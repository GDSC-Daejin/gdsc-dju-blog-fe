import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import GoogleLoader from '../../components/common/GoogleLoader';
import axios from 'axios';
import useCookie from '../../Utils/useCookie';

export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') ?? '';
  const [value, setItem] = useCookie('user');

  useEffect(() => {
    // console.log(userData);
    async function fetchData() {
      const result = await axios.get('https://gdsc-dju.com/api/guest/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      // setCookie('user', result.data.body.data, {
      //   path: '/',
      // });
      setItem(result.data.body.data, {
        path: '/',
      });
    }
    fetchData();
    navigate('/', { replace: true });
  }, []);

  return <GoogleLoader />;
}
