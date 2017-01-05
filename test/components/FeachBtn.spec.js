import { expect } from 'chai';
import React, { PropTypes } from 'react';
import { mount } from 'enzyme';
import { FeachBtn } from '../../src/components/FeachBtn';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// before(() => {
//   injectTapEventPlugin();
// });

function setup() {
  const muiTheme = getMuiTheme();

  const props = {
    selectedCity: null,
    onGetCurrentWeatherData: () => {},
    onGetForecastData: () => {}
  };

  // http://stackoverflow.com/a/38295396
  const wrapper = mount(
    <FeachBtn  {...props}/>, {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    }
  );

  return {
    props,
    wrapper
  };
}

describe('<FeachBtn /> testing', () => {
  it('should have an button', () => {
    const { props, wrapper } = setup();
    const wrapperProps = wrapper.props();

    expect(wrapper.find('button').exists()).to.be.true;
    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapperProps).to.deep.equal(props)
    expect(wrapper.find('button').props().disabled).to.be.true;
    expect(wrapper.find('button').text()).to.be.equal('查詢');
  });
});
