import useSWR from 'swr';
import API from '../index';
import UserService from '../UserService';
async function getMyPostData(postId: string) {
  const res = await UserService.getMyPostData(postId);
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
