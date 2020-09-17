import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Basket from '~/pages/Basket';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/basket" component={Basket} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
