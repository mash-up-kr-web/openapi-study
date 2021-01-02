import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import MovieService from 'services/MovieService';

import { getTwoRandomInts, toDateFormat } from 'utils';

const MovieWorldcup: FC = () => {
  const [movie1, setMovie1] = useState({
    num: 0,
    name: '',
    img: '',
  });
  const [movie2, setMovie2] = useState({
    num: 0,
    name: '',
    img: '',
  });

  const onClickMovie1 = () => {
    console.log('movie1', movie1.num);
    console.log('movie2', movie2.num);
    let result = movie1.num! > movie2.num! ? '맞췄습니다!' : '틀렸습니다!';
    result += `${movie1.name} Ranking: ${movie1.num! + 1}`;
    result += `${movie2.name} Ranking: ${movie2.num! + 1}`;

    alert(result);
  };

  const onClickMovie2 = () => {
    console.log('movie1', movie1.num);
    console.log('movie2', movie2.num);

    let result = movie1.num! < movie2.num! ? '맞췄습니다!' : '틀렸습니다!';
    result += `${movie1.name} Ranking: ${movie1.num! + 1}`;
    result += `${movie2.name} Ranking: ${movie2.num! + 1}`;

    alert(result);
  };

  useEffect(() => {
    (async () => {
      const BoxofficeRes = await MovieService.getKobisBoxoffice({
        targetDt: '20200102',
        itemPerPage: '10',
      });

      const [random1, random2] = getTwoRandomInts();
      const movie1Name =
        BoxofficeRes.data['boxOfficeResult']['dailyBoxOfficeList'][random1][
          'movieNm'
        ];
      const movie2Name =
        BoxofficeRes.data['boxOfficeResult']['dailyBoxOfficeList'][random2][
          'movieNm'
        ];

      const movie1Res = await MovieService.getNaverMovies(movie1Name);
      const movie2Res = await MovieService.getNaverMovies(movie2Name);

      setMovie1(pre => ({
        ...pre,
        num: random1,
        name: movie1Name,
        img: movie1Res.data['items'][0]['image'],
      }));
      setMovie2(pre => ({
        ...pre,
        num: random2,
        name: movie2Name,
        img: movie2Res.data['items'][0]['image'],
      }));
    })();
  }, []);

  return (
    <MovieWorldcupWrapper>
      <MovieWorldcupTitle>Movie Worldcup~!!~!~!</MovieWorldcupTitle>
      <WorldCardsWrapper>
        <MovieCard
          imageUrl={movie1.img}
          title={movie1.name}
          onClick={onClickMovie1}
        />
        <MovieCard
          imageUrl={movie2.img}
          title={movie2.name}
          onClick={onClickMovie2}
        />
      </WorldCardsWrapper>
    </MovieWorldcupWrapper>
  );
};

const MovieWorldcupWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MovieWorldcupTitle = styled.p`
  font-size: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WorldCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  width: 100%;
`;

export default MovieWorldcup;
