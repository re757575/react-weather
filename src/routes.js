import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './components/App';
import Main from './components/Main';

const Page2 = () => (
  <div>
    <h1>Page2</h1>
    <Link to="index">back</Link>
  </div>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="index" component={Main} />
    <Route path="page2" component={Page2} />
  </Route>
);
