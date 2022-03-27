import useSWR from 'swr';
import API from '../index';
import { detailPostDataType } from '../../types/postData';

async function getPostListData(category: string) {
  const res = await API.getPostListData(category);
  return res.data;
}
export function useGetPostListData(category: string) {
  const { data, error } = useSWR<detailPostDataType[]>(
    [`/userPost/${category}`, category],
    getPostListData,
  );
  return {
    data: data && data,
    error: error && error,
  };
}
