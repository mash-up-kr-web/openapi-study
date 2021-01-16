import React, { useState, useCallback } from 'react';

const InputContainer = () => {
  const [areaCode, setAreaCode] = useState('');
  const [sigunguCode, setsigunguCode] = useState('');

  return (
    <div>
      <label htmlFor="area">지역</label>
      <select
        name="area"
        id="area"
        onChange={e => {
          setAreaCode(e.target.value);
        }}
      >
        <option value="" selected disabled>
          지역 선택
        </option>
      </select>
      <label htmlFor="sigungu">시군구 선택</label>
      <select
        name="sigungu"
        id="sigungu"
        onChange={e => {
          setAreaCode(e.target.value);
        }}
      >
        <option value="" selected disabled>
          시군구 선택
        </option>
      </select>
    </div>
  );
};

export default InputContainer;
