import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
);
