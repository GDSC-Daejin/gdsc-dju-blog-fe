import useSWR from 'swr';
import API from '../../api';
import Cookies from 'js-cookie';

const getUserData = async (token?: string) => {
  const response = await API.getUserData(token);
  return response.data.body.data;
};
export const useGetUserData = (token?: string) => {
  const isLogin = !!Cookies.get('token');
  const { data: userData } = useSWR(
    isLogin && [token, `api/user-${token}`],
    getUserData,
  );
  return { userData: userData ?? userData };
};
