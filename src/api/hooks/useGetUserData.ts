import useSWR from 'swr';
import API from '../../api';

const getUserData = async (token: string) => {
  const response = await API.getUserData(token);
  return response.data.body.data;
};
export const useGetUserData = (token: string) => {
  const { data: userData } = useSWR([token, `api/user-${token}`], getUserData);
  return { userData: userData && userData };
};
