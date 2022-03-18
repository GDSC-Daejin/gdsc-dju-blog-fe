import useSWR from 'swr';
import API from '../../api';

const getUserData = async () => {
  const response = await API.getUserData();
  return response.data;
};
export const useGetUserData = () => {
  const { data: userData, error } = useSWR(['api/user'], getUserData, {
    suspense: true,
  });
  return { userData: userData && userData, error: error && error };
};
