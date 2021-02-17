import React from 'react';
import styled from 'styled-components';

import OceanInfo from 'types/OceanInfo';

interface OceanSelectionProps extends React.HTMLProps<HTMLDivElement> {
  ocean: OceanInfo;
  isResult?: boolean;
}

// TODO: 선택시 인터렉션 필요
const OceanSelection = ({ ocean, isResult, onClick }: OceanSelectionProps) => (
  <Selection isResult={isResult} onClick={onClick}>
    <img src={ocean.imageSrc} alt="ocean" />
    <Title>{ocean.name}</Title>
    <Description>{ocean.description}</Description>
  </Selection>
);

export default OceanSelection;

const Selection = styled.div<{ isResult?: boolean }>`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: blue;
  border: 1px solid black;
  cursor: ${props => (props.isResult ? '' : 'pointer')};

  > img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  position: absolute;
  width: 100%;
  top: 30px;
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

const Description = styled.div`
  position: absolute;
  width: 100%;
  bottom: 30px;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
