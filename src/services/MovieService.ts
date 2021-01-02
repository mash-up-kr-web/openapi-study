/* External dependencies */
import axios from 'axios';

/* Internal dependencies */
import Country from 'constants/Country';



class MovieService {
  /*
    genre - 검색을 원하는 장르 코드를 의미한다. 영화 코드는 다음과 같다.
    1: 드라마 2: 판타지 3: 서부 4: 공포 5: 로맨스 6: 모험 7: 스릴러 8: 느와르
    9: 컬트 10: 다큐멘터리 11: 코미디 12: 가족 13: 미스터리 14: 전쟁 15: 애니메이션 16: 범죄
    17: 뮤지컬 18: SF 19: 액션20: 무협 21: 에로 22: 서스펜스 23: 서사 24: 블랙코미디
    25: 실험 26: 영화카툰 27: 영화음악 28: 영화패러디포스터
  */

  getNaverMovies(
    query: string,
    display: number = 10,
    start: number = 1,
    genre?: number,
    country?: Country,
  ) {
    return axios.get('/v1/search/movie', {
      method: 'get',
      params: {
        query,
        display,
        start,
        genre,
        country,
      },
      headers: {
        'Content-Type': 'plain/text',
        'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
      },
    });
  }

  getKobisActors({
    peopleName,
    filmoNames,
    itemPerPage = 10,
    curPage = 1,
  }: {
    peopleName: string;
    filmoNames?: string;
    itemPerPage?: number;
    curPage?: number;
  }) {
    return axios.get(
      'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json',
      {
        params: {
          key: process.env.REACT_APP_KOBIS_KEY,
          curPage,
          itemPerPage,
          peopleNm: peopleName,
          filmoNames,
        },
      },
    );
  }

  getKobisMovies({
    movieNm = '',
    directorNm = '',
    itemPerPage = 10,
    curPage = 1,
  }: {
    movieNm?: string;
    directorNm?: string;
    itemPerPage?: number;
    curPage?: number;
  }) {
    return axios.get(
      'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
      {
        params: {
          key: process.env.REACT_APP_KOBIS_KEY,
          movieNm,
          directorNm,
          itemPerPage,
          curPage,
        },
      },
    );
  }
}

export default new MovieService();
