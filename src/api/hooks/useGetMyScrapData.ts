import { useQuery } from 'react-query';
import PostService from '../PostService';
import Cookies from 'js-cookie';

async function getMyScrapData() {
  const res = await PostService.getMyScrapData();
  return res.data;
}

export function useGetMyScrapData() {
  const token = Cookies.get('token');

  const { isLoading, data: scrapData } = useQuery(
    ['scrap', `/post/scrap/${token}`],
    () => getMyScrapData(),
    {
      enabled: !!token,
    },
  );
  return {
    scrapData: scrapData?.body?.data,
  };
}
