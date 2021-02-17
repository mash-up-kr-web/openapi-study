import React, { useState } from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import OceanSelection from 'components/OceanSelection';
import OceanInfo from 'types/OceanInfo';

const ResultPage = ({ location: { state } }) => {
  const [ocean] = useState<OceanInfo>(state.ocean);
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
