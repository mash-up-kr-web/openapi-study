import React from 'react';
import styled, { css } from 'styled-components';

const Weather = ({ response, darkmode }) => {
  if (!response) {
    return <></>;
  }

  const { weather } = response;
  const { icon, description } = weather;

  return (
    <Card darkmode={darkmode}>
      <img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} />
      <Description darkmode={darkmode}> {description}</Description>
    </Card>
  );
};

export default Weather;

const Card = styled.div<{ darkmode: boolean }>`
  width: 200px;
  height: 200px;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 auto;
  background-color: lightgray;
  ${({ darkmode }) =>
    darkmode &&
    css`
      background-color: white;
    `}
  margin-top: 50px;
  border-radius: 10px;
`;

const Description = styled.p<{ darkmode: boolean }>`
  color: white;
  ${({ darkmode }) =>
    darkmode &&
    css`
      color: black;
    `}
`;
