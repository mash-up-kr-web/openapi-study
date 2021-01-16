import React from 'react';

const TravelContainer = ({ title, addr1, firstimage }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 500,
      }}
    >
      <p>{title}</p>
      <p>주소 : {addr1}</p>
      <img src={firstimage} alt="썸네일 이미지" />
    </div>
  );
};

export default TravelContainer;
