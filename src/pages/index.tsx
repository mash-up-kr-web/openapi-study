import IndexContents from 'components/index';
import React from 'react';
import styled from 'styled-components';
import OceanBackground from 'components/index/OceanBackground';
import qs from 'qs';
const IndexPage = ({location}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  
  const data = query.q
  console.log('name: '+ data);

  const isValid = (data === undefined) ? false : true
  console.log('name isValid: '+ isValid);

  return <>
    <IndexContainer>
      <OceanBackground />
      <IndexContents isValid={isValid} name={data}/>
    </IndexContainer>
  </>;
};

export default IndexPage;

const IndexContainer = styled.div`
    text-align: center;
    color: white;
`;