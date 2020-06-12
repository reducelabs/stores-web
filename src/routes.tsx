import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import ListStores from './pages/ListStores';
import CreateStore from './pages/CreateStore';
import DetailStore from './pages/DetailStore';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={ListStores} path='/' exact />
      <Route component={CreateStore} path='/create-store' />
      <Route component={DetailStore} path='/store' />
    </BrowserRouter>
  );
};

export default Routes;
