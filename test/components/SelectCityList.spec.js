import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { shallow, mount } from 'enzyme';
import DomMock from '../setup';
import SelectCityList from '../../src/components/SelectCityList';
import { getCityNameById } from '../../src/constants/cityIdList';

function setup() {
  const props = {
    onSelectCity: spy()
  }

  const wrapper = shallow(<SelectCityList {...props} />);

  return {
    props,
    wrapper
  }
}

describe('<SelectCityList /> testing', () => {

  before(() => {
    DomMock();
  });

  it('should have an select', () => {
    const { wrapper } = setup();
    const options = wrapper.find('select').children();
    expect(options).to.have.length(6);
    expect(options.get(0).props.children).to.be.equal('請選擇');

    options.map((element) => {
      const cityId = element.getNode().props.value.toString();
      const cityName = element.getNode().props.children.toString();
      if (cityId) {
        expect(getCityNameById(cityId)).to.be.equal(cityName);
      }
    });
  });

  it('should trigger onSelectCity', () => {
    const { props } = setup();
    const wrapper = mount(<SelectCityList {...props} />);
    const select = wrapper.find('select');

    select.simulate('change', {target: { value : '1668341'}});

    expect(props.onSelectCity.called).to.be.true;

    // FIXME: not working
    // expect(select.node.selectedIndex).to.be.equal(1);
  });
});
