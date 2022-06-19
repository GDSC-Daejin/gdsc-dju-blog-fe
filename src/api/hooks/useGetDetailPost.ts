import useSWR from 'swr';
import API from '../index';
async function getDetailPost(postId: string) {
  const res = await API.getPostData(postId);
  return res.data;
}

export function useGetDetailPost(postId: string | undefined) {
  const { data: postData } = useSWR(
    postId && [postId, `/post/${postId}`],
    getDetailPost,
  );
  return {
    postData: postData && postData.body.data,
  };
}
