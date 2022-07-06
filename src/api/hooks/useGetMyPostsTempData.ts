import { useQuery } from 'react-query';
import PostService from '../PostService';
import { userPostUrlFilter } from './postPagination';

async function getMyPostListTempData(params: string) {
  const res = await PostService.getMyPostsTempData(params);
  return res.data.body.data;
}
export function useGetMyPostsTempData(
  category: string,
  page = 0,
  size: number,
) {
  const { data: userPostTempData } = useQuery(
    [`myPost/temp${userPostUrlFilter(category, page, size)}`],
    () => getMyPostListTempData(userPostUrlFilter(category, page, size)),
  );
  return { userPostTempData: userPostTempData && userPostTempData };
}
