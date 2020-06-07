import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import ListStores from './pages/ListStores';
import CreateStore from './pages/CreateStore';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={ListStores} path="/" />
      <Route component={CreateStore} path="/create-store" />
    </BrowserRouter>
  );
}

export default Routes;