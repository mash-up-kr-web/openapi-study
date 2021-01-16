import React from 'react';
import styled from 'styled-components';

interface AnswerProps {
  show: boolean;
  answer: boolean;
}

function Answer({ show, answer }: AnswerProps) {
  if (!show) return null;
  return <AnswerBlock>{answer ? '정답입니다!' : '틀렸습니다!'}</AnswerBlock>;
}

export default Answer;

const AnswerBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-contenr: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  text-align: center;
  background0-color: black;
`;
