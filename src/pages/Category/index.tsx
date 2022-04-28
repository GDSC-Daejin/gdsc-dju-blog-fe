import React, { memo, useCallback, useEffect } from 'react';
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { LayoutContainer } from '../../styles/layouts';
import { CategoryInner, PageBarWrapper } from './styled';
import BlogCardGridLayout from '../../components/common/BlogCardGridLayout';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import { useGetPostListData } from '../../api/hooks/useGetPostListData';
import { NoPosts } from '../MyBlog/BlogHome/styled';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();
  const category = categoryName ? categoryName : 'all';

  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { postListData } = useGetPostListData(category, page - 1);

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
  const categoryHandler = useCallback(
    (category: string) =>
      navigate({
        pathname: `/category/${category}`,
        search: `?${createSearchParams({
          page: page.toString(),
        })}`,
      }),
    [],
  );

  return (
    <LayoutContainer>
      <CategoryInner>
        <CategoryMenu type={category} onClick={categoryHandler} />
        {postListData && (
          <>
            <BlogCardGridLayout PostData={postListData.content} />
            {postListData.empty ? (
              <NoPosts>포스팅된 글이 없습니다</NoPosts>
            ) : (
              <PageBarWrapper>
                <PageBar
                  type={category}
                  page={page}
                  totalPage={postListData.totalPages}
                  onClick={pageHandler}
                />
              </PageBarWrapper>
            )}
          </>
        )}
      </CategoryInner>
    </LayoutContainer>
  );
};

export default memo(Category);
