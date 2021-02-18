/* External dependencies */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import styled from 'styled-components';

import { PostProvider } from 'contexts/Post';
import { CommentProvider } from 'contexts/Comment';

function App() {
  return (
    <AppBody>
      <PostProvider>
        <CommentProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </CommentProvider>
      </PostProvider>
    </AppBody>
  );
}

export default App;

const AppBody = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(64, 64, 64);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
