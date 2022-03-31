import API from '../index';
import useSWR from 'swr';
import { url } from './postPagination';

async function getUserPostListData(params: string) {
  const res = await API.getUserPostListData(params);
  return res.data.body.data;
}

export function useGetUserPostListData(category: string, page = 0) {
  const { data: userPostData, error } = useSWR(
    [`myPost${url(category, page)}`],
    getUserPostListData,
  );
  return { userPostData: userPostData && userPostData, error: error && error };
}
