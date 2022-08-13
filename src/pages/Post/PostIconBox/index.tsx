import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import PostService from '../../../api/PostService';
import Bookmark from '../../../assets/Bookmark';
import PostEditIcon from '../../../assets/PostEditIcon';
import PostTrashIcon from '../../../assets/PostTrashIcon';
import { alertState } from '../../../store/alert';
import { modalState } from '../../../store/modal';
import { DetailPostDataType } from '../../../types/postData';
import { MemberInfo } from '../../../types/userDataType';
import {
  BookmarkWrapper,
  PostEditIconWrapper,
  PostIconWrapper,
  PostTrashIconWrapper,
} from '../styled';

interface Props {
  userInfoData: MemberInfo;
  postData: DetailPostDataType;
  postId: string;
}
const PostIconBox: React.FC<Props> = ({ postData, userInfoData, postId }) => {
  const [modal, setModal] = useRecoilState(modalState);
  const [alert, setAlert] = useRecoilState(alertState);

  const navigate = useNavigate();
  const deleteHandler = async () => {
    setModal({ ...modal, isOpen: false });
    try {
      await PostService.deleteMyPostData(postId);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '글이 삭제되었어요.',
      });
      await navigate(-1);
    } catch (e) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '글 삭제에 실패했어요.',
      });
    }
  };
  const handleRemove = () => {
    setModal({
      ...modal,
      isOpen: true,
      type: 'deleteCheck',
      onClick: deleteHandler,
    });
  };
  const isUserEqual = userInfoData.nickname == postData.memberInfo.nickname;
  return (
    <PostIconWrapper>
      <BookmarkWrapper>
        <Bookmark marked={!isUserEqual} height={'25'} />
      </BookmarkWrapper>
      {isUserEqual && (
        <>
          <PostEditIconWrapper
            onClick={() => {
              navigate(`/post/edit/${postId}`);
            }}
          >
            <PostEditIcon marked={isUserEqual} height={'25'} />
          </PostEditIconWrapper>
          <PostTrashIconWrapper
            onClick={isUserEqual ? handleRemove : undefined}
          >
            <PostTrashIcon marked={isUserEqual} height={'25'} />
          </PostTrashIconWrapper>
        </>
      )}
    </PostIconWrapper>
  );
};

export default PostIconBox;
