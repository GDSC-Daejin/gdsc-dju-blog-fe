import useSWR from 'swr';
import API from '../index';
import { rowDetailPostDataType } from '../../types/postData';
import { url } from './postPagination';
import axios from 'axios';

async function getPostListData(params: string) {
  const res = await API.getPostListData(params);
  return res.data;
}
export function useGetPostListData(category: string, page = 0, size?: number) {
  const { data, error } = useSWR(
    [`post/list${url(category, page, size)}`],
    getPostListData,
    { suspense: true },
  );
  return {
    data: data && data,
  };
}

const instance = axios.create({
  baseURL: 'https://gdsc-dju.com',
  timeout: 15000,
});

export function useGetPostsData(categoryName: string, nowPage: number) {
  const handleServerAPI = (categoryName: string, nowPage: number) => {
    if (categoryName === 'all') return `/api/v1/post/list?page=${nowPage}`;
    else return `/api/v1/post/list/${categoryName}?page=${nowPage}`;
  };

  const fetcher = (url: string) =>
    instance.get(url).then((response) => response.data);

  const { data, error } = useSWR<rowDetailPostDataType>(
    handleServerAPI(categoryName, nowPage),
    fetcher,
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
