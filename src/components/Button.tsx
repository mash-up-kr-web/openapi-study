import Feeling from 'constants/Feeling';
import React from 'react';
import styled from 'styled-components';

function Button(props) {
  const handleClick = feeling => e => {
    console.log(feeling);
    console.log(props);
    props.onClick(feeling);
  };
  return (
    <Wrapper className="Button">
      <StyledButton value="pleasure" onClick={handleClick(Feeling.Pleasure)}>
        기쁨
      </StyledButton>
      <StyledButton value="sad" onClick={handleClick(Feeling.Sad)}>
        슬픔
      </StyledButton>
      <StyledButton value="happy" onClick={handleClick(Feeling.Happy)}>
        행복
      </StyledButton>
      <StyledButton value="depressed" onClick={handleClick(Feeling.Depressed)}>
        우울
      </StyledButton>
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.div`
  margin-bottom: 40px;

  > :not(:first-child) {
    margin-left: 15px;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background: white;
  border: 1px solid gray;
  font-size: 15px;

  &:hover {
    background: lightgray;
    color: white;
  }
`;
