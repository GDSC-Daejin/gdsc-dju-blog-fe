import { useQuery } from 'react-query';
import {
  RowDetailPostListType,
  SearchPostDataType,
} from '../../types/postData';
import PostService from '../PostService';

async function getSearchPostsData(params: string) {
  const res = await PostService.getSearchPosts(params);
  return res.data.body.data;
}
export function useGetSearchPosts(postContent: string) {
  const { isLoading, data: postListData } = useQuery<SearchPostDataType>(
    [`post/search/${postContent}`],
    () => getSearchPostsData(postContent),
  );
  return { isLoading, postListData };
}
