import React, { memo, useCallback, useEffect } from 'react';
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { CategoryPageInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostsData } from '../../api/hooks/useGetPostsData';
import { NoPosts } from '../MyBlog/BlogHome/styled';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();

  const category = categoryName ? categoryName : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { postListData } = useGetPostsData(category, page - 1);

  const navigate = useNavigate();
  useEffect(() => {
    if (page) {
      setSearchParams({
        page: '1',
      });
    }
  }, []);

  const pageHandler = useCallback((page: number, limit?: number) => {
    if (page < 1) {
      return;
    }
    if (page === limit) {
      return;
    } else {
      navigate({
        pathname: `/category/${category}`,
        search: `?${createSearchParams({
          page: page.toString(),
        })}`,
      });
    }
  }, []);
  const categoryHandler = (category: string) =>
    navigate({
      pathname: `/category/${category}`,
      search: `?${createSearchParams({
        page: page.toString(),
      })}`,
    });

  return (
    <LayoutContainer>
      <CategoryPageInner>
        <CategoryMenu type={category} onClick={categoryHandler} />
        {postListData && (
          <>
            {postListData.empty ? (
              <NoPosts>포스팅된 글이 없습니다</NoPosts>
            ) : (
              <BlogCardGridLayout PostData={postListData.content} />
            )}
          </>
        )}
        <PageBarWrapper>
          <PageBar
            type={category}
            page={page}
            totalPage={postListData?.totalPages || 0}
            onClick={pageHandler}
          />
        </PageBarWrapper>
      </CategoryPageInner>
    </LayoutContainer>
  );
};

export default memo(Category);
