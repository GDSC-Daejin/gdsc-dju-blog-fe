import PostService from '../PostService';

export async function setBookMarkPostAPI(postId: number) {
  const res = await PostService.updateMyScrapData(postId);
  return res.data;
}
