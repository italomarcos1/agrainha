import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
import Checkout from '~/pages/Checkout';
import Delivery from '~/pages/Delivery';
import Payment from '~/pages/Payment';
import Search from '~/pages/Search';
import Product from '~/pages/Product';
import Basket from '~/pages/Basket';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/menu" component={Menu} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/payment" component={Payment} />
      <Route path="/product/:index" component={Product} />
      <Route path="/basket" component={Basket} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
