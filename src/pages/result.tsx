import React, { useState } from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import OceanSelection from 'components/OceanSelection';
import OceanInfo from 'types/OceanInfo';
import { serialize } from 'util/crypto';

const ResultPage = ({ location: { state } }) => {
  const [ocean] = useState<OceanInfo>(state.ocean);
  const encoded = serialize(state);
  const url = new URL(encoded, 'http://localhost:3000/');
  const shortenUrl = url.href.substring(0, 37) + ' ...';
  const messages = {
    initial: '',
    correct: '',
    incorrect: '',
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <Logo>나랑 바다 갈래?</Logo>
      </Header>
      <Content style={{ display: 'flex' }}>
        <OceanSelection ocean={ocean} />
        <Description>
          <MessageBox>{messages.initial}</MessageBox>
          <UrlBox>
            <UrlInput disabled value={shortenUrl} />
            <CopyButton>Copy</CopyButton>
          </UrlBox>
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
