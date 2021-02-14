/* External dependencies */
import React from 'react';

/* Internal dependencies */
import * as Styled from './LoadingResult.styled';

interface LoadingResultProps {
  corrected: boolean;
  answer: string;
}

function LoadingResult({ corrected, answer }: LoadingResultProps) {
  return (
    <Styled.ResultWrapper>
      <Styled.Corrected corrected={corrected}>
        {corrected ? '정답입니다' : '틀렸습니다'}
      </Styled.Corrected>
      <Styled.Answer>
        {corrected || (
          <div>
            정답은 <span>{answer}</span> 입니다
          </div>
        )}
      </Styled.Answer>
    </Styled.ResultWrapper>
  );
}

export default LoadingResult;
