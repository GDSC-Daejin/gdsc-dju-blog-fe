import API from '../index';
import useSWR from 'swr';
import { userPostUrlFilter } from './postPagination';

async function getMyPostsData(params: string) {
  const res = await API.getMyPostsData(params);
  return res.data.body.data;
}

export function useGetMyPostsData(category: string, page = 0, size: number) {
  const { data: userPostData } = useSWR(
    [`myPost/${userPostUrlFilter(category, page, size)}`],
    getMyPostsData,
  );
  return { userPostData: userPostData && userPostData };
}
