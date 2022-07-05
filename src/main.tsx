import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig>
        <RecoilRoot>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </RecoilRoot>
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
);
