import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { detailPostDataType } from '../../types/postData';
import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';

// total page 데이터 넘기기
// SWR 깜빡이는 오류 처리하기

const Category = () => {
  const [PostData, setPostData] = useState<detailPostDataType[]>([]);
  const location = useLocation();
  const [categoryName, setCategoryName] = useState(
    location.pathname.split('/').slice(-1)[0],
  );
  const [nowPage, setNowPage] = useState(
    parseInt(location.search.split('=').slice(-1)[0]) || 0,
  );
  const instance = axios.create({
    baseURL: 'https://gdsc-dju.com',
    timeout: 15000,
  });
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

  // const { data } = useGetPostListData(categoryName, nowPage);

  useEffect(() => {
    if (categoryName === 'all')
      instance
        .get(`/api/v1/post/list?page=${nowPage}`)
        .then(function (response) {
          setPostData(response.data.body.data.content);
        });
    else
      instance
        .get(`/api/v1/post/list/${categoryName}?page=${nowPage}`)
        .then(function (response) {
          setPostData(response.data.body.data.content);
        });
  }, [categoryName, nowPage]);

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu
          type={categoryName}
          onClick={handleCategoryMenuNavigation}
        />
        <BlogCardGridLayout PostData={PostData} />
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
