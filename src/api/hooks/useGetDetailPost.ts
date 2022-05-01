import useSWR from 'swr';
import API from '../index';
async function getDetailPost(postId: string) {
  const res = await API.getPostData(postId);
  return res.data;
}

export function useGetDetailPost(postId?: string) {
  const { data: postData } = useSWR([postId, `/post/${postId}`], getDetailPost);
  return {
    postData: postData && postData.body.data,
  };
}
