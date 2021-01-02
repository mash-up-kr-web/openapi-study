/* External dependencies */
import React, { useCallback, useState } from 'react';

import Button from 'components/Button';
import MovieService from 'services/MovieService';
import Feeling from 'constants/Feeling';
import Result from 'components/Result';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState();

  const handleClick = useCallback(async (feeling: Feeling) => {
    const res = await MovieService.getNaverMovies(
      '10',
      100,
      1,
      getFeelingToGenre(feeling),
    );
    setData(res.data);
  }, []);
  return (
    <Page>
      <Button onClick={handleClick} />
      {data ? <Result data={data} /> : <div>버튼을 눌러주세요</div>}
    </Page>
  );
}

export default App;

const getFeelingToGenre = (feeling: Feeling) => {
  switch (feeling) {
    case Feeling.Depressed:
      return 6;
    case Feeling.Sad:
      return 11;
    case Feeling.Pleasure:
      return 12;
    case Feeling.Happy:
    default:
      return 2;
  }
};

const Page = styled.div`
  padding: 20px;
`;
