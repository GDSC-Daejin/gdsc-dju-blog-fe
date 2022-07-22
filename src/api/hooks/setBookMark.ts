import API from '../index';
import PostService from '../PostService';

export async function setBookMarkPostAPI(postId: number) {
  const res = await PostService.setBookMarkPost(postId);
  return res.data;
}
