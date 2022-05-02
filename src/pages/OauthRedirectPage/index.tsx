import React, { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import GoogleLoader from '../../components/common/GoogleLoader';
import { userState } from '../../store/user';
import { useGetUserData } from '../../api/hooks/useGetUserData';
import { IUserDataType } from '../../types/userData';

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';
  localStorage.setItem('token', token);
  const { userData } = useGetUserData(token);
  return (
    <Suspense fallback={GoogleLoader}>
      {userData && <OauthRedirect {...userData} />}
    </Suspense>
  );
};
const OauthRedirect = (userData: IUserDataType) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    setUser({ ...user, ...userData });
    navigate('/', { replace: true });
  }, [userData]);
  return null;
};
export default OauthRedirectPage;
