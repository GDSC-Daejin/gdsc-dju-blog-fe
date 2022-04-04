import useSWR from 'swr';
import API from '../../api';

const getUserData = async () => {
  const response = await API.getUserData();
  return response.data.body.data;
};
export const useGetUserData = () => {
  const { data: userData } = useSWR(['api/user'], getUserData, {
    suspense: true,
  });
  return { userData: userData && userData };
};
