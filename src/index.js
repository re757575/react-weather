import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { install, applyUpdate } from 'offline-plugin/runtime';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import routes from './routes';
import './main.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={hashHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

install({
  onUpdateReady: () => applyUpdate()
});
