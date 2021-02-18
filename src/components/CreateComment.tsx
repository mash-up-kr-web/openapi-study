import React, { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

import { useCommentContext } from 'contexts/Comment';

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState<string>('');
  const { actions } = useCommentContext();
  const [cookies] = useCookies();
  const { writer, writerImgUrl } = cookies;

  const onSubmit = () => {
    actions.createComment(writer, writerImgUrl, content, postId);
  };

  return (
    <PostItemContainer>
      <WriterBox>
        <WriterImg src={writerImgUrl} alt="writer_img" />
        <Writer>{writer}</Writer>
      </WriterBox>
      <ContentBox>
        <ContentInput
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
          placeholder="댓글을 입력해주세요"
        />
        <ContentSubmitButton onClick={onSubmit}>OK</ContentSubmitButton>
      </ContentBox>
    </PostItemContainer>
  );
};

const PostItemContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ContentInput = styled.input`
  margin: 0;
  background-color: white;
  border-radius: 3px;
  font-size: 15px;
  color: black;
  flex: 1;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  border: none;
  margin-right: 20px;
`;

const ContentSubmitButton = styled.button`
  width: 60px;
  height: 40px;
  border-radius: 3px;
  background-color: rgb(52, 152, 219);
  color: white;
  border: 0;
  font-size: 12px;
`;

export default CreateComment;
