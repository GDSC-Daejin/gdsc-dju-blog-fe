import { atom } from 'recoil';
const POST = 'post';

export const POST_KEY = {
  POST_TMPSTORE: 'postTmpStore',
};
export const PostState = {
  [POST_KEY.POST_TMPSTORE]: false,
};
export const postState = atom<typeof PostState>({
  key: POST,
  default: PostState,
});
