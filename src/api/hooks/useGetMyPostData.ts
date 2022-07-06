import { useQuery } from 'react-query';
import UserService from '../UserService';

async function getMyPostData(postId: string | undefined) {
  if (postId) {
    const res = await UserService.getMyPostData(postId);
    return res.data;
  }
}

export function useGetMyPostData(postId: string | undefined) {
  const { data: postData } = useQuery(
    [postId, `/post/${postId}`],
    () => getMyPostData(`/post/${postId}`),
    {
      enabled: !postId,
    },
  );
  return {
    postData: postData && postData.body.data,
  };
}
