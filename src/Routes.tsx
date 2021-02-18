import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'pages/Login';
import Main from 'pages/Main';
import Talk from 'pages/Talk';

const Routes: any = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/talk" component={Talk} />
    </Switch>
  );
};

export default Routes;
