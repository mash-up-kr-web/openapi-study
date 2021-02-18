import React, { useState, useCallback, useEffect } from 'react';
import service from 'services/AvatarService';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const Login = () => {
  const [writer, setWriter] = useState<string>('');
  const [category, setCategory] = useState<string>('male');
  const [writerImgUrl, setWriterImgUrl] = useState<string | undefined>('');
  const history = useHistory();
  const [_, setCookies] = useCookies();

  useEffect(() => {
    (async () => {
      const result = await service.getProfile(category, writer);
      setWriterImgUrl(result);
    })();
  }, [category, writer]);

  const onClick = useCallback(() => {
    setCookies('writer', writer);
    setCookies('writerImgUrl', writerImgUrl);
    history.push('/main');
  }, [setCookies, writer, writerImgUrl, history]);

  return (
    <LoginContainer>
      <WriterImg src={writerImgUrl} alt="writer_img" />
      <InputContainer>
        <CategorySelect
          onChange={e => setCategory(e.target.value)}
          defaultValue={category}
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="human">human</option>
          <option value="identicon">identicon</option>
          <option value="initials">initials</option>
          <option value="bottts">bottts</option>
          <option value="avataaars">avataaars</option>
          <option value="jdenticon">jdenticon</option>
          <option value="gridy">gridy</option>
        </CategorySelect>
        <WriterInput
          type="text"
          id="writer"
          value={writer}
          onChange={e => {
            setWriter(e.target.value);
          }}
          placeholder="닉네임을 입력해주세요."
        />
        <Button type="button" onClick={onClick}>
          OK
        </Button>
      </InputContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 500px;
  background-color: rgb(94, 94, 94);
  border-radius: 3px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const WriterImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 3px;
  background-color: white;
`;

const InputContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

const CategorySelect = styled.select`
  padding: 10px;
  font-size: 15px;
  border-radius: 3px;
  margin-right: 10px;
`;

const WriterInput = styled.input`
  padding: 10px;
  font-size: 15px;
  border-radius: 3px;
  border: none;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 70px;
  padding: 10px;
  border-radius: 3px;
  background-color: rgb(52, 152, 219);
  color: white;
  border: 0;
  font-size: 15px;
`;

export default Login;
