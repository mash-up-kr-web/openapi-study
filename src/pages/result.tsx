import React, { useCallback, useState } from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import OceanSelection from 'components/OceanSelection';
import OceanInfo from 'types/OceanInfo';
import { serialize } from 'util/crypto';

type FlagType = 'initial' | 'correct' | 'incorrect';

const ResultPage = ({ location: { state } }) => {
  const [ocean] = useState<OceanInfo>(state.ocean);
  const encoded = serialize(state);
  const url = new URL(encoded, 'http://localhost:3000/');
  const shortenUrl = url.href.substring(0, 37) + ' ...';
  const flag: FlagType = state.flag || 'initial';
  const messages = {
    initial: `"${ocean.name}"에 같이 가고 싶은 사람에게 링크를 공유하세요!`,
    correct: `바다 좀 볼 줄 아는군? 같이 "${ocean.name}" 보러 가자구~`,
    incorrect: `"${ocean.name}" 보러 가고 싶었다능..`,
  };

  const onClick = useCallback(() => {
    navigator.clipboard.writeText(url.href);
  }, [url.href]);

  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <Logo>나랑 바다 갈래?</Logo>
      </Header>
      <Content style={{ display: 'flex' }}>
        <OceanSelection ocean={ocean} />
        <Description>
          <MessageBox>{messages[flag]}</MessageBox>
          {flag === 'initial' && (
            <UrlBox>
              <UrlInput disabled value={shortenUrl} />
              <CopyButton onClick={onClick}>Copy</CopyButton>
            </UrlBox>
          )}
        </Description>
      </Content>
    </Layout>
  );
};

export default ResultPage;

const Logo = styled.div`
  color: white;
`;

const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-size: 24px;
`;

const UrlBox = styled.div`
  display: flex;
  height: 50%;
`;
const UrlInput = styled.input`
  width: 450px;
  font-size: 20px;
  height: 50px;
  text-align: center;
  border: 0;
  border-radius: 7px;
  background-color: #f4f7ff;
`;
const CopyButton = styled.button`
  width: 77px;
  height: 48px;
  font-size: 16px;
  margin-left: 12px;
  border: 0;
  border-radius: 7px;
  background-color: #001529;
  color: #e5eafe;
  cursor: pointer;
`;
