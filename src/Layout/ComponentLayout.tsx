import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useGetUserToken } from '../api/hooks/useGetUserData';
import Alert from '../components/common/Alert';
import Modal from '../components/common/modal';
import SideBar from '../components/common/SideBar';
import Navigation from '../components/common/Navigation';
import { AnimatePresence } from 'framer-motion';
import GoogleLoader from '../components/common/GoogleLoader';
import { useRecoilState } from 'recoil';
import { loaderState } from '../store/loader';
import GlobalStyles from '../styles/globalStyles';
import { NavigationBlock } from '../styles/layouts';

const ComponentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loader] = useRecoilState(loaderState);
  useGetUserToken();
  return (
    <div>
      <Alert />
      <Modal />
      <SideBar />
      <Navigation />
      <NavigationBlock />
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
      </AnimatePresence>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default ComponentLayout;
