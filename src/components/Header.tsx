import React from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const [cookie, _] = useCookies();
  const { writer, writerImgUrl } = cookie;
  const history = useHistory();

  return (
    <HeaderContainer onClick={() => history.push('/talk')}>
      <Writer>{writer} 님</Writer>
      <WriterImg src={writerImgUrl} alt="writer_img" />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: auto;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Writer = styled.p`
  font-size: 15px;
  color: white;
  margin-right: 20px;
`;

const WriterImg = styled.img`
  width: 60px;
  height: 60px;
  background-color: white;
`;
