import useSWR from 'swr';
import API from '../index';
import { postUrlFilter } from './postPagination';

async function getPostListData(params: string) {
  const res = await API.getPostListData(params);
  return res.data.body.data;
}
export function useGetPostListData(category: string, page = 0, size?: number) {
  const { data: postListData } = useSWR(
    [`post/list${postUrlFilter(category, page, size)}`],
    getPostListData,
  );
  return {
    postListData: postListData && postListData,
  };
}
