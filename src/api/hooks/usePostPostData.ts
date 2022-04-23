import API from '../index';
import { postPostDataType } from '../../types/postData';
import useSWR from 'swr';
async function postPostData(postData: postPostDataType) {
  await API.postPostData(postData);
}
export function usePostPostData(postData: postPostDataType) {
  useSWR([postData], postPostData);
}
