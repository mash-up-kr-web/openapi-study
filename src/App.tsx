/* External dependencies */
import { IndexContextProvider } from 'components/index/IndexContext';
import IndexPage from 'pages';
import GamePage from 'pages/game';
import ResultPage from 'pages/result';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <IndexContextProvider>
      <Router>
        <Switch>
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/result" component={ResultPage} />
            <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
      </IndexContextProvider>

    </>
  );
}

export default App;
