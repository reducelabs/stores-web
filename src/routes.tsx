import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ListStores from './pages/ListStores';
import CreateStore from './pages/CreateStore';
import DetailStore from './pages/DetailStore';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={ListStores} path='/lojas' />
      <Route component={CreateStore} path='/cadastrar-loja' />
      <Route component={DetailStore} path='/store' />
    </BrowserRouter>
  );
};

export default Routes;
