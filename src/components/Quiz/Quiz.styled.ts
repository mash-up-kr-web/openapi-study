/* External dependencies */
import styled from 'styled-components';

export const QuizWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  z-index: 100000;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  background-color: rgb(68, 233, 68);
`;
