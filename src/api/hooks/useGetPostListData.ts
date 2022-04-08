import useSWR from 'swr';
import API from '../index';
import { detailPostDataType } from '../../types/postData';
import { url } from './postPagination';

async function getPostListData(params: string) {
  const res = await API.getPostListData(params);
  return res.data;
}
export function useGetPostListData(category: string, page = 0, size?: number) {
  const { data, error } = useSWR(
    [`post/list/${url(category, page, size)}`],
    getPostListData,
    { suspense: true },
  );
  return {
    data: data && data,
  };
}
