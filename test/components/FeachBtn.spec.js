import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { FeachBtn } from '../../src/components/FeachBtn';

describe('<FeachBtn /> testing', () => {
  it('should have an button', () => {
    const props = {
      selectedCity: null,
      onGetCurrentWeatherData: () => {},
      onGetForecastData: () => {}
    };

    const wrapper = shallow(<FeachBtn  {...props}/>);
    expect(wrapper.find('button').exists()).to.be.true;
    expect(wrapper.find('button')).to.have.length(1);

    const wrapperProps = wrapper.find('button').props();
    expect(wrapperProps.disabled).to.be.true;
    expect(wrapperProps.onClick).to.be.function;
    expect(wrapperProps.children).to.be.equal('查詢');
  });
});
