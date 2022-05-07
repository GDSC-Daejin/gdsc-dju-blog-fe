import React from 'react';
import styled from 'styled-components';

interface HomePhraseProps {
  phraseData: {
    from: string;
    by: string;
    phrase: string;
  };
}
const From = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h7};
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.grey900};
`;
const Phrase = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  margin-bottom: 26px;
  color: ${({ theme }) => theme.color.grey900};
  font-weight: 500;
  width: 600px;
`;
const By = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.color.grey900};
`;
const HomePhrase: React.FC<HomePhraseProps> = ({ phraseData }) => {
  const phrases = phraseData.phrase.split('\n');
  return (
    <div>
      <From>From {phraseData.from}</From>
      <Phrase>
        {phrases.map((text, id) => (
          <>
            {text}
            <br />
          </>
        ))}
      </Phrase>
      <By>By {phraseData.by}</By>
    </div>
  );
};

export default HomePhrase;
