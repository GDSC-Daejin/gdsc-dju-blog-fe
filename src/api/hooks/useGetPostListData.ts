import useSWR from 'swr';
import API from '../index';
import { url } from './postPagination';

async function getPostListData(params: string) {
  const res = await API.getPostListData(params);
  return res.data.body.data;
}
export function useGetPostListData(category: string, page = 0, size?: number) {
  const { data: postListData } = useSWR(
    [`post/list${url(category, page, size)}`],
    getPostListData,
  );
  return {
    postListData: postListData && postListData,
  };
}
