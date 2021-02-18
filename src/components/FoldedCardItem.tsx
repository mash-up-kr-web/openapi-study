import React from 'react';
import styled from 'styled-components';
import CardDetailProps from 'types/props/CardDetailProps';

const FoldedCardItem = ({ post, active, setExtended }: CardDetailProps) => {
  const { writer, writerImgUrl, content } = post;

  return (
    <FoldedCardItemContainer active={active}>
      <WriterBox>
        <WriterImg src={writerImgUrl} alt="writer_img" />
        <Writer>{writer}</Writer>
      </WriterBox>
      <ContentBox>
        <Content>{content}</Content>
      </ContentBox>
      <FooterBox>
        <LinkButton onClick={() => setExtended(true)}>reply to</LinkButton>
      </FooterBox>
    </FoldedCardItemContainer>
  );
};

const FoldedCardItemContainer = styled.div<{ active: boolean }>`
  height: ${props => (props.active ? ' 440px' : ' 400px')};
  width: 600px;
  background-color: rgb(94, 94, 94);
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 3px;
  -webkit-transition: width 0.5s, height 0.5s, -webkit-transform 0.5s;
  transition: width 0.5s, height 0.5s, transform 0.5s;
`;

const WriterBox = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
`;

const WriterImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 3px;
  background-color: white;
`;

const Writer = styled.p`
  font-size: 20px;
  color: white;
  margin: 0;
  margin-top: 5px;
`;

const ContentBox = styled.div`
  width: 100%;
  flex: 3;
  padding: 15px 0;
`;
const FooterBox = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Content = styled.p`
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #000;
  padding: 15px;
  font-size: 18px;
  border-radius: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled.a`
  font-size: 10;
  cursor: pointer;
`;

export default FoldedCardItem;
