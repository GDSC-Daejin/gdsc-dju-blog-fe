import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
