/* External dependencies */
import React, {useState} from 'react';
import './App.css';
import SearchInput from 'components/SearchInput'
import SearchResult from 'components/SearchResult'
import MovieService from 'services/MovieService'

const GENRE_ARR: any = [
  '드라마',
  '판타지',
  '서부',
  '공포',
  '로맨스',
  '모험',
  '스릴러',
  '느와르',
  '컬트',
  '다큐멘터리',
  '코미디',
  '가족',
  '미스터리',
  '전쟁',
  '애니메이션',
  '범죄',
  'SF',
  '액션',
  '무협',
  '에로',
  '서스펜스',
  '서사',
  '블랙코미디',
  '실험',
  '영화카툰',
  '영화음악',
  '영화패러디포스터',
];

const GENRE_MAPPER: any = new Map([
  ['드라마', 1],
  ['판타지', 2],
  ['서부', 3],
  ['공포', 4],
  ['로맨스', 5],
  ['모험', 6],
  ['스릴러', 7],
  ['느와르', 8],
  ['컬트', 9],
  ['다큐멘터리', 10],
  ['코미디', 11],
  ['가족', 12],
  ['미스터리', 13],
  ['전쟁', 14],
  ['애니메이션', 15],
  ['범죄', 16],
  ['SF', 17],
  ['액션', 18],
  ['무협', 19],
  ['에로', 20],
  ['서스펜스', 21],
  ['서사', 22],
  ['블랙코미디', 23],
  ['실험', 24],
  ['영화카툰', 25],
  ['영화음악', 26],
  ['영화패러디포스터', 27],
]);


/*
  1. 영화를 검색한다( 영화제목 || 영화감독 )
  2. 비슷한 영화 추천 목록이 나온다
  3. 영화감독으로 검색하면 감독의 영화 목록이 나온다

  컴포넌트가 3개
  검색 컴포넌트
  2,3 공통 목록 컴포넌트
*/
function App() {
  const [movies, setMovies] = useState([])
  const [directors, setDirectors] = useState([])



  const search = async(text) => {
    const _directors: any = await MovieService.getKobisMovies({ directorNm: text})
    const movieResult: any = await MovieService.getKobisMovies({ movieNm: text})

   const movie = movieResult.data.movieListResult.movieList
   const mapKey = GENRE_ARR.find( arr => arr.includes(movie[0].repGenreNm))
   const genre = GENRE_MAPPER.get(mapKey)

  //  const recomendedMovies = await MovieService.getNaverMovies(
  //    '',
  //   genre,
  // )


    setDirectors(_directors.data.movieListResult.movieList)
    setMovies(movie)
 }

  return <div className="App">
    <SearchInput handleSearch={search} />
    <SearchResult result={movies} title={'영화'}/>
    <SearchResult title={'감독'} result={directors}/>
  </div>;
}


export default App;
