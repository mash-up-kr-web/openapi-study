/* External dependencies */
import React, { useMemo } from 'react';

/* Internal dependencies */
import * as Styled from './Result.styled';
import tier1 from 'images/tier1.jpg';
import tier2 from 'images/tier2.jpeg';
import tier3 from 'images/tier3.jpg';
import tier4 from 'images/tier4.jpg';

interface ResultProps {
  answerCount: number;
}

function Result({ answerCount }: ResultProps) {
  const resultTitle = useMemo(() => {
    switch (answerCount) {
      case 0:
      case 1:
      case 2:
      case 3:
        return '요리에 소질이 없군요';
      case 4:
      case 5:
      case 6:
        return '그럭저럭';
      case 7:
      case 8:
        return '요리를 잘하시네요';
      case 9:
      case 10:
        return '요리왕! 메시업 웹팀한테 요리해주기!';
    }
  }, [answerCount]);

  const resultImage = useMemo(() => {
    switch (answerCount) {
      case 0:
      case 1:
      case 2:
      case 3:
        return tier1;
      case 4:
      case 5:
      case 6:
        return tier2;
      case 7:
      case 8:
        return tier3;
      case 9:
      case 10:
        return tier4;
    }
  }, [answerCount]);

  return (
    <Styled.Container>
      {resultTitle}
      <img src={resultImage} width={100} alt="" />
    </Styled.Container>
  );
}

export default Result;
