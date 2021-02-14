import styled from 'styled-components';

export const Container = styled.div`
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

export const Title = styled.div`
  margin-bottom: 30px;
  text-align: center;
  font-size: 48px;
  font-weight: bolder;
`;
