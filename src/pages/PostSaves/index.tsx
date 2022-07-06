import React, { Suspense, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import {
  NoPosts,
  PageBarSection,
  PostCardWrapper,
  PostSectionWrapper,
  TopMenuWrapper,
} from '../MyBlog/BlogHome/styled';
import { ButtonWrapper, PostSavesTitle } from '../PostSaves/styled';
import CategoryMenu from '../../components/common/CategoryMenu';
import { GDSCButton } from '../../components/common/Button';
import PostCard from '../../components/common/PostCard';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import PageBar from '../../components/common/PageBar';
import { useGetMyData } from '../../api/hooks/useGetMyData';
import { useGetMyPostsTempData } from '../../api/hooks/useGetMyPostsTempData';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import { POST_KEY, postState } from '../../store/postEdit';
import { useRecoilState } from 'recoil';

const PostSaves = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get('type');
  const category = categoryName ? categoryName : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { userData } = useGetMyData();
  const userInfoData = userData?.memberInfo;
  const { userPostTempData } = useGetMyPostsTempData(category, page - 1, 6);
  const navigate = useNavigate();

  useEffect(() => {
    if (page) {
      setSearchParams({
        type: category,
        page: '1',
      });
    }
  }, []);

  const pageHandler = (page: number, limit?: number) => {
    if (page < 1) {
      return;
    }
    if (page === limit) {
      return;
    } else {
      navigate({
        pathname: `/post/saves`,
        search: `?${createSearchParams({
          type: category,
          page: page.toString(),
        })}`,
      });
    }
  };
  const categoryHandler = (category: string) =>
    navigate({
      pathname: `/post/saves`,
      search: `?${createSearchParams({
        type: category,
        page: page.toString(),
      })}`,
    });
  const [post, setPost] = useRecoilState(postState);
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <PostSavesTitle>임시 저장된 글</PostSavesTitle>
          <TopMenuWrapper>
            <CategoryMenu type={category as string} onClick={categoryHandler} />
            <ButtonWrapper>
              <GDSCButton
                text={'새로작성'}
                color={'googleBlue'}
                onClick={() => navigate('/post/write')}
              />
            </ButtonWrapper>
          </TopMenuWrapper>
          {userPostTempData && (
            <PostSectionWrapper>
              {!userPostTempData.empty ? (
                userPostTempData.content.map((data) => (
                  <PostCardWrapper
                    key={data.postId}
                    onClick={() => {
                      setPost({ ...post, [POST_KEY.POST_TMPSTORE]: true });
                      navigate(`/post/write/${data.postId}`);
                    }}
                  >
                    <PostCard {...data} />
                  </PostCardWrapper>
                ))
              ) : (
                <NoPosts>작성된 글이 없습니다.</NoPosts>
              )}
            </PostSectionWrapper>
          )}
          <PageBarSection>
            {userPostTempData && userInfoData && !userPostTempData.empty && (
              <PageBar
                page={page}
                totalPage={userPostTempData.totalPages}
                nickname={userInfoData.nickname}
                type={category}
                onClick={pageHandler}
              />
            )}
          </PageBarSection>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default PostSaves;
