import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function setup() {
  const muiTheme = getMuiTheme();

  const props = {
  };

  const wrapper = shallow(
    <App  {...props}/>, {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    }
  );

  return {
    props,
    wrapper
  };
}

describe('<App />  testing', () => {
  it('should have 5 children components', () => {
    const { wrapper } = setup();
    expect(wrapper.children()).to.be.length(5);
  });
});