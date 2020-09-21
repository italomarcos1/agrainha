import React from 'react';
import { Route } from 'react-router-dom';

import Header from '~/components/Header';

function CustomRoute(props) {
  return (
    <Header>
      <Route {...props} />
    </Header>
  );
}

export default CustomRoute;
