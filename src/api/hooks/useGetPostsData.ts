import { useQuery } from 'react-query';
import PostService from '../PostService';
import { postUrlFilter } from './postPagination';

async function getPostListData(params: string) {
  const res = await PostService.getPostListData(params);
  return res.data.body.data;
}
export function useGetPostsData(category: string, page = 0, size?: number) {
  const { data: postListData } = useQuery(
    [`post/list${postUrlFilter(category, page, size)}`],
    () => getPostListData(`post/list${postUrlFilter(category, page, size)}`),
  );
  return {
    postListData: postListData && postListData,
  };
}
