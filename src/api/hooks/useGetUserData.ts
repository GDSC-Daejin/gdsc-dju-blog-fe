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
