import API from '../index';
import useSWR from 'swr';
import { userPostUrlFilter } from './postPagination';
import Cookies from 'js-cookie';

async function getUserPostListTempData(params: string) {
  const res = await API.getUserPostListTempData(params);
  return res.data.body.data;
}
export function useGetUserPostListTempData(
  category: string,
  page = 0,
  size: number,
) {
  const isLogin = !!Cookies.get('token');

  const { data: userPostTempData } = useSWR(
    isLogin && [`myPost/temp${userPostUrlFilter(category, page, size)}`],
    getUserPostListTempData,
  );
  return { userPostTempData: userPostTempData && userPostTempData };
}
