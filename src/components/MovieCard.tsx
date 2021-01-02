import React, { FC } from 'react';
import styled from 'styled-components';

interface MovieCardProps {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

const MovieCard: FC<MovieCardProps> = ({ imageUrl, title, onClick }) => {
  return (
    <MovieCardWrapper onClick={onClick}>
      <Img src={imageUrl} alt="Movie without thumbnail" />
      <p>{title}</p>
    </MovieCardWrapper>
  );
};

const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  flex:1;
`

export default MovieCard;
