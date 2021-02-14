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
        return (
          <>
            멍멍 멍멍멍!멍!
            <p style={{ fontSize: '14px' }}>
              한솔요리학원:
              http://www.hscook.com/?gclid=EAIaIQobChMIwYXN-e3p7gIVR6aWCh0aqgCDEAAYASAAEgLctvD_BwE
            </p>
            <p style={{ fontSize: '14px' }}>
              코리아요리학원:
              http://koreacook-gangnam.kr/?gclid=EAIaIQobChMIwYXN-e3p7gIVR6aWCh0aqgCDEAAYAiAAEgLX2vD_BwE
            </p>
            <p style={{ fontSize: '14px' }}>
              한국요리학원: http://www.nicecook.com/
            </p>
            <p style={{ fontSize: '14px' }}>
              백종원요리비책:
              https://www.youtube.com/channel/UCyn-K7rZLXjGl7VXGweIlcA
            </p>
          </>
        );
      case 4:
      case 5:
      case 6:
        return '요리 못하는 사람중에 가장 잘하시네요!';
      case 7:
      case 8:
        return '요리를 잘하시네요! 메시업 웹팀한테 요리해주기';
      case 9:
      case 10:
        return '임금님 수라상! 메시업 전체한테 요리해주기';
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
      <Styled.Title>{resultTitle}</Styled.Title>
      <img src={resultImage} width={600} alt="" />
    </Styled.Container>
  );
}

export default Result;
