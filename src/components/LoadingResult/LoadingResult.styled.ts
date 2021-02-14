/* External dependencies */
import styled from 'styled-components';

interface CorrectedProps {
  corrected: boolean;
}

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.95;
  background-color: #ffffff;
  z-index: 99999999;
`;

export const Corrected = styled.div<CorrectedProps>`
  font-size: 60px;
  font-weight: bolder;
  color: ${({ corrected }) => (corrected ? 'green' : 'red')};
`;

export const Answer = styled.div`
  font-size: 28px;

  span {
    color: blue;
  }
`;
