import { useQuery } from 'react-query';
import PostService from '../PostService';
import { userPostUrlFilter } from './postPagination';

async function getMyPostsNotTempData(params: string) {
  const res = await PostService.getMyPostsNotTempData(params);
  return res.data.body.data;
}
export function useGetMyPostsNotTempData(
  category: string,
  page = 0,
  size: number,
) {
  const { data: userPostNotTempData } = useQuery(
    [`myPost/temp${userPostUrlFilter(category, page, size)}`],
    () => getMyPostsNotTempData(userPostUrlFilter(category, page, size)),
  );
  return { userPostNotTempData: userPostNotTempData && userPostNotTempData };
}
