import useSWR from 'swr';
import API from '../../api';

const getPostDetailData = async (postId: number) => {
  const response = await API.getPostDetailData(postId);
  return response.data.body.data;
};
export const useGetPostDetailData = (postId: number) => {
  const { data: PostDetailData } = useSWR(
    [`/post/list/${postId}`],
    getPostDetailData,
    {
      suspense: true,
    },
  );
  return { PostDetailData: PostDetailData && PostDetailData };
};
