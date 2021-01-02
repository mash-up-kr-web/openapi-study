import React, { useEffect, useState } from 'react';
import MovieService from '../services/MovieService';

export default function MovieList() {
  const [movies, setMovies] = useState<any>([]);
  const [curIndex, setCurIndex] = useState(2);

  const getMovieList = async () => {
    const result = (await MovieService.getDailyBoxOffice()) as any;
    console.log('result', result);
    if (result) {
      // setMovies(result?.dailyBoxOfficeList);
      const movies = result?.data?.boxOfficeResult?.dailyBoxOfficeList?.map(
        movie => ({
          title: movie.movieNm,
          selected: false,
        }),
      );

      setMovies(movies);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.length > 0 &&
        movies.slice(curIndex - 2, curIndex).map((movie, idx) => (
          <>
            <div
              key={movie.title}
              onClick={() => {
                setMovies(
                  movies.map(item => {
                    return item.title === movie.title
                      ? { ...item, selected: true }
                      : item;
                  }),
                );

                if (movies.length === curIndex) {
                  // 다음 라운드
                  console.log('movies', movies);
                  setMovies(
                    movies
                      .filter(movie => movie.selected)
                      .map(movie => ({ ...movie, selected: false })),
                  );
                  setCurIndex(2);
                } else {
                  setCurIndex(curIndex + 2);
                }
              }}
            >
              {movie.title}
            </div>
            {idx === 0 && <div>vs</div>}
          </>
        ))}
    </div>
  );
}
