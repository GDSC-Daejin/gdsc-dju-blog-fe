import useSWR from 'swr';
import API from '../index';
import Cookies from 'js-cookie';
async function getMyPostData(postId: string) {
  const res = await API.getMyPostData(postId);
  return res.data;
}

export function useGetMyPostData(postId: string | undefined) {
  const isLogin = !!Cookies.get('token');
  const { data: postData } = useSWR(
    isLogin && postId && [postId, `/post/${postId}`],
    getMyPostData,
  );
  return {
    postData: postData && postData.body.data,
  };
}
