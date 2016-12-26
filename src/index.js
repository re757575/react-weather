import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import store from './store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

import { install, applyUpdate } from 'offline-plugin/runtime';

install({
  onUpdateReady: () => applyUpdate()
});