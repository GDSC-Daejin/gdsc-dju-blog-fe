import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import TokenService from '../TokenService';
import UserService from '../UserService';

export const getUserData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};

export const useGetMyData = () => {
  const [cookie] = useCookies(['refresh_token', 'token']);
  const { data: userData } = useQuery(
    [cookie.token, `${cookie.token}`],
    () => getUserData(cookie.token),
    {
      refetchInterval: 30 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: true,
      onError: () => {
        cookie.token &&
          TokenService.getRefresh(cookie.refresh_token, cookie.token);
      },
    },
  );

  return { userData: userData ?? userData };
};
export const getMyToken = async (refreshToken: string, token: string) => {
  const response = await TokenService.getRefresh(refreshToken, token);
  return response.data.body.data.token;
};

export const useGetMyToken = () => {
  const [cookies, setCookies] = useCookies(['token', 'refresh_token']);
  const { data: newToken } = useQuery(
    [cookies.refresh_token, cookies.refresh_token],
    () => getMyToken(cookies.refresh_token, cookies.token),
    {
      refetchInterval: 30 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: true,
      onError: () => {
        TokenService.getRefresh(cookies.refresh_token, cookies.token);
      },
    },
  );
  newToken && setCookies('token', newToken);
};
