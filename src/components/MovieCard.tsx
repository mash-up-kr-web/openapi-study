import React, { useCallback } from 'react';

export default function MovieCard({ movie }) {
  const onClick = useCallback(() => {}, []);

  return <div onClick={onClick}>{movie?.movieNm}</div>;
}
