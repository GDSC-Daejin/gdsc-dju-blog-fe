import useSWR from 'swr';
import API from '../../api';

export const getUserData = async (token?: string) => {
  const response = await API.getUserData(token);
  return response.data.body.data;
};

export const useGetUserData = (token?: string | null) => {
  const { data: userData } = useSWR(
    token ? [token, `${token}`] : null,
    getUserData,
  );
  return { userData: userData ?? userData };
};
export const getUserToken = async (refreshToken: string, token: string) => {
  const response = await API.getRefresh(refreshToken, token);
  return response.data.body.data.token;
};

export const useGetUserToken = (refreshToken: string, token: string) => {
  const { data: newToken } = useSWR([refreshToken, token], getUserToken, {
    refreshInterval: 60 * 60 * 1000,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
    onError: () => {
      API.getRefresh(refreshToken, token);
    },
  });
  return { newToken: newToken ?? newToken };
};
