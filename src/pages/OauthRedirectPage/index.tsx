import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import GoogleLoader from '../../components/common/GoogleLoader';
import { userState } from '../../store/user';
import { useGetUserData } from '../../api/hooks/useGetUserData';
import { ILoginUserData } from '../../types/userData';
import axios from 'axios';

export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') ?? '';
  console.log(token);
  // const { userData } = useGetUserData(token);

  useEffect(() => {
    // console.log(userData);
    // navigate('/', { replace: true });
    async function fetchData() {
      const result = await axios.get('https://gdsc-dju.com/api/guest/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      console.log(result);
    }
    fetchData();
  }, []);

  return (
    <Suspense fallback={GoogleLoader}>
      <></>
    </Suspense>
  );
}

// const OauthRedirect = (userData: ILoginUserData) => {
//   const [user, setUser] = useRecoilState(userState);

//   useEffect(() => {
//     setUser({ ...user, ...userData });
//     navigate('/', { replace: true });
//   }, [userData]);
//   return null;
// };
// export default OauthRedirectPage;
