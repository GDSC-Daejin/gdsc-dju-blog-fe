import useSWR from 'swr';
import API from '../index';
async function getDetailPostTemp(postId: string) {
  const res = await API.getPostTempData(postId);
  return res.data;
}

export function useGetDetailPostTemp(postId: string) {
  const { data: postTempData } = useSWR(`${postId}`, getDetailPostTemp);
  return {
    postTempData: postTempData && postTempData.body.data,
  };
}