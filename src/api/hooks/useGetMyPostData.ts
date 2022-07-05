import useSWR from 'swr';
import API from '../index';
async function getMyPostData(postId: string) {
  const res = await API.getMyPostData(postId);
  return res.data;
}

export function useGetMyPostData(postId: string | undefined) {
  const { data: postData } = useSWR(
    postId && [postId, `/post/${postId}`],
    getMyPostData,
  );
  return {
    postData: postData && postData.body.data,
  };
}
