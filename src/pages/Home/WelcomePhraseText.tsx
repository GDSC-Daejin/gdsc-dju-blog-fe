import React from 'react';
import { WelcomePhrase } from './styled';

const WelcomePhraseText = () => {
  return (
    <WelcomePhrase>
      <span>from Cindy</span>
      <p>
        Google Developer Student Club
        <br />
        Daejin Univ. Blog 에 오신걸 환영합니다.
      </p>
      <span>by Cindy</span>
    </WelcomePhrase>
  );
};

export default React.memo(WelcomePhraseText);
