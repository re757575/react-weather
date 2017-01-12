import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import FeachBtn from '../components/FeachBtn';

const actions = {
  selectCity: action('selectCity'),
};

// addDecorator
// https://github.com/storybooks/react-storybook/issues/76#issuecomment-226834760
storiesOf('FeachBtn', module)
  .add('default', () => (
    <FeachBtn selectedCity={11} actions={actions} />
  ));
