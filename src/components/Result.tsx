import React from 'react';
import styled from 'styled-components';

function Result(props) {
  console.log(props.data.items);
  const movieData = props.data.items;

  return (
    <div>
      {movieData.map(data => (
        <DataWrapper key={data.audiAcc}>
          <TitleBox>
            <Title dangerouslySetInnerHTML={{ __html: data.title }}></Title>
            <Date>({data.pubDate})</Date>
          </TitleBox>
          <Poster src={data.image} alt={data.title} />
          <br />
          <span>★ {data.userRating}</span>
        </DataWrapper>
      ))}
    </div>
  );
}

export default Result;

const DataWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
`;

const TitleBox = styled.h2`
  max-width: 300px;
`;
const Title = styled.span`
  padding-right: 5px;
`;
const Date = styled.span`
  font-size: 20px;
`;
const Poster = styled.img`
  width: 300px;
`;
