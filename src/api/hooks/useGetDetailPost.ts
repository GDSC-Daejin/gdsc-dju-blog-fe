import { useQuery } from 'react-query';
import PostService from '../PostService';

async function getDetailPost(postId: string) {
  const res = await PostService.getPostData(postId);
  return res.data;
}

export function useGetDetailPost(postId: string) {
  const { data: postData } = useQuery([postId, `/post/${postId}`], () =>
    getDetailPost(postId),
  );
  return {
    postData: postData && postData.body.data,
  };
}
