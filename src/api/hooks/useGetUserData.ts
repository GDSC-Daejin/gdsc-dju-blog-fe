import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import useSWR from 'swr';
import API from '../../api';

export const getUserData = async (token: string) => {
  const response = await API.getUserData(token);
  return response.data.body.data;
};

export const useGetUserData = () => {
  const [cookie] = useCookies(['refresh_token', 'token']);
  const { data: userData } = useQuery(
    [cookie.token, `${cookie.token}`],
    () => getUserData(cookie.token),
    {
      refetchInterval: 30 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: true,
      onError: () => {
        cookie.token && API.getRefresh(cookie.refresh_token, cookie.token);
      },
    },
  );

  return { userData: userData ?? userData };
};
export const getUserToken = async (refreshToken: string, token: string) => {
  const response = await API.getRefresh(refreshToken, token);
  return response.data.body.data.token;
};

export const useGetUserToken = (refreshToken: string, token: string) => {
  const { data: newToken } = useSWR([refreshToken, token], getUserToken, {
    refreshInterval: 30 * 60 * 1000,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
    onError: () => {
      API.getRefresh(refreshToken, token);
    },
  });
  return { newToken: newToken ?? newToken };
};
