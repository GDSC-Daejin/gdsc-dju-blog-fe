import API from '../index';
import useSWR from 'swr';
import { userPostUrlFilter } from './postPagination';

async function getUserPostListTempData(params: string) {
  const res = await API.getUserPostListTempData(params);
  return res.data.body.data;
}
export function useGetUserPostListTempData(
  category: string,
  page = 0,
  size: number,
) {
  const { data: userPostTempData } = useSWR(
    [`myPost/temp${userPostUrlFilter(category, page, size)}`],
    getUserPostListTempData,
  );
  return { userPostTempData: userPostTempData && userPostTempData };
}
