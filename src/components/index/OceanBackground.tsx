import React from 'react';
import styled from 'styled-components';
import ocean from '../../assets/ocean.jpg';

const OceanBackground = () => (
  <>
    <svg
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <filter id="water">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".05 .05"
          numOctaves="1"
          result="noise1"
        />
        <feColorMatrix in="noise1" type="hueRotate" values="0" result="noise2">
          <animate
            attributeName="values"
            from="0"
            to="360"
            dur="1s"
            repeatCount="indefinite"
          />
        </feColorMatrix>
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          scale="7"
          in="SourceGraphic"
          in2="noise2"
        />
      </filter>
    </svg>
    <BackgroundImg src={ocean} alt="ocean Image" />
  </>
);

export default OceanBackground;

const BackgroundImg = styled.img`
  width: 105vw;
  height: 105vh;
  position: absolute;
  top: -5vh;
  left: -5vw;
  object-fit: cover;
  filter: url(#water);
  position: absolute;
  z-index: -1;
`;
