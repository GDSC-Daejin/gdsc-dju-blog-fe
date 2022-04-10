import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import {
  detailPostDataType,
  rowDetailPostDataType,
} from '../../types/postData';
import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import useSWR from 'swr';

// total page 데이터 넘기기
// SWR 깜빡이는 오류 처리하기

const Category = () => {
  const [PostData, setPostData] = useState<detailPostDataType[]>([]);
  const location = useLocation();
  const [categoryName, setCategoryName] = useState(
    location.pathname.split('/').slice(-1)[0],
  );
  const [nowPage, setNowPage] = useState(
    location.search.split('=').slice(-1)[0] === ''
      ? 0
      : parseInt(location.search.split('=').slice(-1)[0]),
  );

  const handleCategoryMenuNavigation = (categoryName: string) => {
    const pageTitle = '페이지제목';
    window.history.pushState('', pageTitle, `/category/${categoryName}`);
    setCategoryName(categoryName);
    setNowPage(0);
  };
  const handlePageNavigation = (nowPage: number) => {
    const pageTitle = '페이지제목';
    window.history.pushState(
      '',
      pageTitle,
      `/category/${categoryName}?page=${nowPage}`,
    );
    setNowPage(nowPage);
  };
  const instance = axios.create({
    baseURL: 'https://gdsc-dju.com',
    timeout: 15000,
  });
  const handleServerAPI = () => {
    if (categoryName === 'all') return `/api/v1/post/list?page=${nowPage}`;
    else return `/api/v1/post/list/${categoryName}?page=${nowPage}`;
  };

  const fetcher = (url: string) =>
    instance.get(url).then((response) => response.data);
  const { data, error } = useSWR<rowDetailPostDataType>(
    handleServerAPI(),
    fetcher,
  );
  // const { data } = useGetPostListData(categoryName, nowPage);

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu
          type={categoryName}
          onClick={handleCategoryMenuNavigation}
        />
        <BlogCardGridLayout PostData={data?.body.data.content} error={error} />
        <PageBarWrapper>
          <PageBar
            page={nowPage}
            totalPage={10}
            onClick={handlePageNavigation}
          />
        </PageBarWrapper>
      </CategoryInner>
    </LayoutContainer>
  );
};

export default Category;

// const navigate = useNavigate();
// const params = useParams();
// const [searchParams] = useSearchParams();
// const currentParamsPageNumber = searchParams.get('page');
// const nowParamsPageNumber = () => {
//   return currentParamsPageNumber === null
//     ? 0
//     : parseInt(currentParamsPageNumber);
// };

// useEffect(() => {
//   if (categoryName === 'all')
//     instance
//       .get(`/api/v1/post/list?page=${nowPage}`)
//       .then(function (response) {
//         setPostData(response.data.body.data.content);
//       });
//   else
//     instance
//       .get(`/api/v1/post/list/${categoryName}?page=${nowPage}`)
//       .then(function (response) {
//         setPostData(response.data.body.data.content);
//       });
// }, [categoryName, nowPage]);

// function useUser (id) {
//   const { data, error } = useSWR(`/api/user/${id}`, fetcher)

//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error
//   }
// }
// const handlePostData = () => {
//   return data?.body.data.content === undefined ? [] : data?.body.data.content;
// };
// const handleCategoryMenuNavigation = (categoryName: string) => {
//   navigate(`/category/${categoryName}`); //수정사항
// };

// const handlePageNavigation = (nowPage: number) => {
//   nowPage === nowParamsPageNumber()
//     ? null
//     : navigate(`/category/${params.categoryName}?page=${nowPage}`); //수정사항
// };
// const handleTotalPageData = () => {
//   return data?.body.data.totalPages ? data.body.data.totalPages : 0;
// };
