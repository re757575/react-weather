import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from '../../src/components/App';

function setup() {
  const muiTheme = getMuiTheme();

  const props = {
  };

  const wrapper = shallow(
    <App {...props} />, {
      context: { muiTheme },
      childContextTypes: {
        muiTheme: React.PropTypes.object
      }
    }
  );

  return {
    props,
    wrapper
  };
}

describe('<App />  testing', () => {
  it('should exists', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).to.be.true;
  });
});
