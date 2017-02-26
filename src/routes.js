import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HotelsPage from './components/hotel/HotelsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HotelsPage} />
  </Route>
);
