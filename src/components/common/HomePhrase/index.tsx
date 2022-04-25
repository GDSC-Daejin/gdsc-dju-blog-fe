import React from 'react';
import styled from 'styled-components';

interface HomePhraseProps {
  from: string;
  by: string;
  phrase: string;
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
  font-weight: bold;
`;
const By = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.color.grey900};
`;
const HomePhrase: React.FC<HomePhraseProps> = ({ from, by, phrase }) => {
  const phrases = phrase.split('\n');
  return (
    <div>
      <From>{from}</From>
      <Phrase>
        {phrases.map((text, id) => (
          <>
            {text}
            <br />
          </>
        ))}
      </Phrase>
      <By>{by}</By>
    </div>
  );
};

export default HomePhrase;
