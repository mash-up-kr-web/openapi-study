/* External dependencies */
import IndexPage from 'pages';
import GamePage from 'pages/game';
import ResultPage from 'pages/result';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/result" component={ResultPage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
