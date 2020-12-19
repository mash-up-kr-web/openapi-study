/* External dependencies */
import Weather from 'components/Weather';
import React, { useEffect, useState } from 'react';
import RakutenService from 'services/RakutenService';
import styled, { css } from 'styled-components';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [response, setRespones] = useState(undefined);

  const onClick = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    (async () => {
      const res = await RakutenService.getWeather('126.734086', '127.269311');

      setRespones(res);
    })();
  }, []);

  return (
    <AppWrapper darkmode={darkmode}>
      <Weather darkmode={darkmode} response={response} />
      <DarkmodeBtn darkmode={darkmode} onClick={onClick}>
        {' '}
        Dark mode{' '}
      </DarkmodeBtn>
    </AppWrapper>
  );
}

const DarkmodeBtn = styled.button<{ darkmode: boolean }>`
  padding: 10px;
  margin-top: 10px;
  background-color: lightgray;
  color: white;
  border: 0;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  ${({ darkmode }) =>
    darkmode &&
    css`
      background-color: white;
      color: black;
    `}
`;

const AppWrapper = styled.div<{ darkmode: boolean }>`
  width: 100%;
  height: 100%;
  ${({ darkmode }) =>
    darkmode &&
    css`
      background-color: black;
    `}
`;

// 1. 아이콘, des 가져오기(아이콘은 코드로 외부에서 가져오기): 완료
// 2. 다크모드 지원

export default App;
