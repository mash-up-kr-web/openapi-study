import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useIndexDispatch } from './IndexContext';

interface IndexProps {
  isValid: boolean;
  name: string;
}

function NameExistComp(props) {
  const name = props.name;
  return (
    <>
      <Title>{name} 님의 초대</Title>;
      <Link to="/game">
        <StartButton>🎮start🎮</StartButton>
      </Link>
    </>
  );
}

function NameNotExistComp() {
  const [value, setValue] = useState('');
  const dispatch = useIndexDispatch();

  const handleSubmit = () => {
    dispatch({ type: 'SET_NAME', name: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledInput
          value={value}
          placeholder="이름을 입력해 주세요."
          onChange={e => setValue(e.target.value)}
        />
        <br />
        <Link to="/game">
          <StartButton onClick={handleSubmit}>🎮start🎮</StartButton>
        </Link>
      </form>
    </>
  );
}

function Contents({ isValid, name }: IndexProps) {
  if (isValid) {
    return <NameExistComp name={name} />;
  } else {
    return <NameNotExistComp />;
  }
}

function IndexContents(props: IndexProps) {
  const isValid = props.isValid;
  const name = props.name;
  return (
    <>
      <Contents isValid={isValid} name={name} />
    </>
  );
}

export default IndexContents;

const Title = styled.div`
  margin-top: 400px;
  font-weight: bolder;
  font-size: 30pt;
`;

const StyledInput = styled(Input)`
  margin-top: 400px;
  width: 200px;
  height: 50px;
`;

const StartButton = styled(Button)`
  margin-top: 20px;
  width: 200px;
  height: 50px;
  font-weight: bolder;
  font-size: 20pt;
  text-align: center;
`;
