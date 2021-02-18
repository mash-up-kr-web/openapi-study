import React from 'react';
import styled from 'styled-components';

import PostItemProps from 'types/props/PostItemProps';

const PostItem = ({ post }: PostItemProps) => {
  const { writer, writerImgUrl, content } = post;

  return (
    <PostItemContainer>
      <WriterBox>
        <WriterImg src={writerImgUrl} alt="writer_img" />
        <Writer>{writer}</Writer>
      </WriterBox>
      <ContentBox>
        <Content>{content}</Content>
      </ContentBox>
    </PostItemContainer>
  );
};

const PostItemContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const WriterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const WriterImg = styled.img`
  width: 50px;
  height: 50px;
  background-color: white;
`;

const Writer = styled.p`
  font-size: 15px;
  margin: 0;
  margin-top: 5px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.p`
  margin: 0;
  background-color: white;
  border-radius: 3px;
  font-size: 15px;
  color: black;
  flex: 1;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  overflow: auto;
`;

export default React.memo(PostItem);
