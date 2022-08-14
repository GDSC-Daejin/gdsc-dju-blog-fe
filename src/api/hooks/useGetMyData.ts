import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import TokenService from '../TokenService';
import UserService from '../UserService';

export const getUserData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};
export const getMyToken = async (refreshToken: string, token: string) => {
  const response = await TokenService.getRefresh(refreshToken, token);
  if (response.data.header.code == 500) {
    Cookies.remove('token');
    Cookies.remove('refresh_token');
  }
  return response.data.body.data.token;
};

export const useGetMyData = () => {
  const [cookies, setCookies] = useCookies(['refresh_token', 'token']);
  const isEnabled = !!(cookies.token && cookies.refresh_token);
  const { data: userData } = useQuery(
    [cookies.token, `${cookies.token}`],
    () => getUserData(cookies.token),
    {
      refetchInterval: 30 * 60 * 1000,
      retry: 1,
      enabled: isEnabled,
      onError: () => {
        useGetMyToken();
      },
    },
  );

  return { userData: userData ?? userData };
};

export const useGetMyToken = () => {
  const [cookies, setCookies, removeCookies] = useCookies([
    'token',
    'refresh_token',
  ]);
  const isEnabled = !!(cookies.token && cookies.refresh_token);
  const { data: newToken } = useQuery(
    [cookies.refresh_token, cookies.refresh_token],
    () => getMyToken(cookies.refresh_token, cookies.token),
    {
      refetchInterval: 30 * 60 * 1000,
      retry: 1,
      enabled: isEnabled,
      onError: () => {
        removeCookies('token');
        removeCookies('refresh_token');
      },
    },
  );
  newToken && setCookies('token', newToken);
};
