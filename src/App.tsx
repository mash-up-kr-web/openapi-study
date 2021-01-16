/* External dependencies */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import TravelService from './services/TravelService';
import Result from './components/Result';
import DetailType from './constants/DetailType';

function App() {
  const [data, setData] = useState([] as DetailType[]);
  const [keyword, setKeyword] = useState('');
  const [couseTitle, setCouseTitle] = useState('');

  const onSubmit = useCallback(async () => {
    const basket = await TravelService.getTravelInfo({
      contentTypeId: 25,
      numOfRows: 100,
    });

    const index = Math.floor(Math.random() * 100);
    setCouseTitle(basket[index].title);
    const couse = await TravelService.getCouseInfo(basket[index].contentid);
    setData(couse as DetailType[]);
  }, [keyword]);

  useEffect(() => {
    (async () => {
      const res = await TravelService.getCouseInfo(2557515);
      setData(res as DetailType[]);
      console.log(res);
      //
    })();
    

  }, []);

  return (
    <div>
      <div>
        <StyledButton onClick={onSubmit}>
          랜덤 여행코스 검색
        </StyledButton>
      </div>
      <br />
      <CouseTitle>{couseTitle}</CouseTitle>
      {data ? data.map(d =>
        <Result key={d.subname} couse={d} />
      ) : null}
    </div>
  );
}

export default App;

const CouseTitle = styled.h1`
  margin-left: 20px;
`;

const StyledButton = styled.button`
  margin: 20px 0 0 20px;
  padding: 10px 20px;
  background: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: lightgray;
  }
`;