import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// react-redux
// https://github.com/storybooks/react-storybook/issues/76#issuecomment-253434704
const store = configureStore();
addDecorator(story => (
  <Provider store={store}>
    {story()}
  </Provider>
));

// material-ui
// http://div.io/topic/1887
addDecorator(story => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {story()}
  </MuiThemeProvider>
));

injectTapEventPlugin();

const viewReq = require.context('../src/stories', true, /.story.js$/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

// https://github.com/storybooks/react-storybook/issues/125
function loadStories() {
  require('../src/stories');
  requireAll(viewReq);
}

configure(loadStories, module);
