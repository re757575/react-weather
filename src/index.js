import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { install, applyUpdate } from 'offline-plugin/runtime';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import App from './components/App';
import './main.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

install({
  onUpdateReady: () => applyUpdate()
});
