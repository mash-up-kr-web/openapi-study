import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { usePostContext } from 'contexts/Post';

const Talk = () => {
  const [content, setContent] = useState<string>('');
  const { actions } = usePostContext();
  const history = useHistory();
  const [cookies] = useCookies();
  const { writer, writerImgUrl } = cookies;

  const onCancel = useCallback(
    _ => {
      setContent('');
      history.goBack();
    },
    [history],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      actions.createPost(writer, writerImgUrl, content);
      setContent('');
      history.push('/main');
    },
    [actions, content, history, writer, writerImgUrl],
  );

  return (
    <TalkContainer>
      <WriterContainer>
        <WriterImg src={writerImgUrl} alt="writer_img" />
        <WriterP> {writer}</WriterP>
      </WriterContainer>
      <ContentContainer>
        <ContentTextarea
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
          placeholder="내용을 입력해주세요"
        ></ContentTextarea>
        <ContentCancelButton type="button" onClick={onCancel}>
          NO
        </ContentCancelButton>
        <ContentSubmitButton onClick={onSubmit}>OK</ContentSubmitButton>
      </ContentContainer>
    </TalkContainer>
  );
};

const TalkContainer = styled.div`
  width: 700px;
  height: 500px;
  border-radius: 3px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.19);
  background-color: rgb(94, 94, 94);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;

const WriterContainer = styled.div`
  text-align: center;
  font-size: 20px;
`;

const WriterImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 3px;
  background-color: white;
`;

const WriterP = styled.p`
  color: white;
  font-size: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const ContentTextarea = styled.textarea`
  width: 600px;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 3px;
  resize: none;
  padding: 20px;
`;

const ContentSubmitButton = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 3px;
  background-color: rgb(52, 152, 219);
  color: white;
  border: 0;
  font-size: 12px;
`;

const ContentCancelButton = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 3px;
  background-color: rgb(224, 224, 224);
  color: rgb(64, 64, 64);
  border: 0;
  font-size: 12px;
  margin-right: 20px;
`;

export default Talk;
