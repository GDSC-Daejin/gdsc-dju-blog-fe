/*Chart Plugin*/
import '@toast-ui/chart/dist/toastui-chart.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
/*Table Cell Plugin*/
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism-tomorrow.css';
/*Code Syntax Highlight */
import 'prismjs/themes/prism.css';
import React, { ChangeEvent, Dispatch, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
/*color plugin*/
import 'tui-color-picker/dist/tui-color-picker.css';
import { useGetMyPostData } from '../../api/hooks/useGetMyPostData';
import PostService from '../../api/PostService';
import PostWriteLayout from '../../Layout/postWrite';
import { alertState } from '../../store/alert';
import { ModalType, modalState } from '../../store/modal';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { PostPostDataType } from '../../types/postData';

export const PostCategoryMenuData = [
  {
    title: 'Frontend'.toLowerCase(),
  },
  {
    title: 'Backend'.toLowerCase(),
  },
  {
    title: 'Android'.toLowerCase(),
  },
  {
    title: 'Design'.toLowerCase(),
  },
  {
    title: 'Common'.toLowerCase(),
  },
];

const PostWrite = () => {
  const [file, setFile] = useState<null | File>();
  const [fileImage, setFileImage] = useState<string | null>(null);
  const [modal, setModal] = useRecoilState(modalState);
  const [alert, setAlert] = useRecoilState(alertState);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { postData } = useGetMyPostData(id);

  const handleDraft = async (
    detailPostData: PostPostDataType,
    temp: boolean,
  ) => {
    const postData = { ...detailPostData, tmpStore: temp };
    try {
      await PostService.postMyPostData(postData);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '?????? ????????? ???????????????',
      });
      await navigate(`/category/all`);
    } catch (e) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '?????? ????????? ???????????????',
      });
    }
  };

  const handleSubmit = async (
    detailPostData: PostPostDataType,
    temp: boolean,
  ) => {
    const postData = { ...detailPostData, tmpStore: temp };
    setModal({
      ...modal,
      isOpen: false,
    });
    try {
      await PostService.postMyPostData(postData);
      await navigate(`/category/all`);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '???????????? ???????????????',
      });
    } catch (error) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '????????? ???????????? ???????????????.',
      });
    }
  };
  const updatePost = async (detailPostData: PostPostDataType) => {
    const postData = { ...detailPostData, tmpStore: false };
    setModal({
      ...modal,
      isOpen: false,
    });
    try {
      id && (await PostService.updateMyPostData(postData, id));
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '??????????????? ???????????????',
      });
      await navigate(`/category/all`);
    } catch (error) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '??????????????? ???????????????',
      });
    }
  };

  const submitHandler = (detailPostData: PostPostDataType, type: string) => {
    //?????????
    if (type === 'uploadPost') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => handleSubmit(detailPostData, false),
      });
    }
    // ????????????
    if (type === 'draft') {
      handleDraft(detailPostData, true);
    }
    if (type === 'update') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => updatePost(detailPostData),
      });
    }
    if (type === 'backBlock') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => navigate(`/category/all`),
      });
    }
  };

  const fileHandler = (
    e: ChangeEvent<HTMLInputElement>,
    setDetailPostData: Dispatch<React.SetStateAction<PostPostDataType>>,
    files: FileList | undefined | null,
  ) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result?.toString();

      if (base64) {
        console.log(base64);
        setDetailPostData((prev) => {
          return {
            ...prev,
            base64Thumbnail: base64.split(',')[1],
          };
        });
      }
    };
    if (files) {
      const selectFile = files[0];
      if (selectFile && e.target.files) {
        setFileImage(URL.createObjectURL(selectFile));
        setDetailPostData((prev) => {
          return {
            ...prev,
            fileName: selectFile.name,
          };
        });
        reader.readAsDataURL(selectFile);
        setFile(e.target.files[0]);
      }
    }
  };

  useEffect(() => {
    const preventGoBack = () => {
      // change start
      history.pushState(null, '', location.href);
      // change end
      setModal({
        ...modal,
        isOpen: true,
        type: 'backBlock',
        onClick: () => {
          navigate(`/category/all`);
          setModal({ ...modal, isOpen: false });
        },
      });
    };
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', preventGoBack);
    return () => window.removeEventListener('popstate', preventGoBack);
  }, []);

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <PostWriteLayout
            postData={postData}
            submitHandler={submitHandler}
            fileHandler={fileHandler}
            id={id}
            fileImage={fileImage}
            setFileImage={setFileImage}
          />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default PostWrite;
