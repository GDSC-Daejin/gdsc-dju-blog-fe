import API from '../index';

export async function setBookMarkScrapAPI(postId: number) {
  const res = await API.setBookMarkScrap(postId);
  return res.data;
}
