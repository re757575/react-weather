import { expect } from 'chai';
import { spy } from 'sinon'
import React from 'react';
import { shallow, mount } from 'enzyme';
import DomMock from '../setup';
import cityIdList from '../../src/constants/cityIdList';
import ReloadDataLink from '../../src/components/ReloadDataLink';

const CITY_ID = Object.keys(cityIdList[1]).toString();

function setup() {
  const props = {
    reloadType: '',
    selectedCity: '',
    onReload: spy()
  }

  const wrapper = shallow(<ReloadDataLink {...props} />);

  return {
    props,
    wrapper
  }
}

describe('<ReloadDataLink /> testing', () => {

  before(() => {
    DomMock();
  });

  it('should can not click link if no selectedCity', () => {
    const { wrapper } = setup();
    expect(wrapper.find('a').prop('style').color).to.be.equal('gray');
  });
  
  it('should can click link if have selectedCity', () => {
    const { props, wrapper } = setup();

    wrapper.setProps({
      reloadType: 'weather',
      selectedCity: CITY_ID,
    });
    expect(wrapper.find('a').prop('style').color).to.be.equal('');

    const link = mount(<ReloadDataLink {...props} />).find('a');
    link.simulate('click');
    expect(props.onReload.called).to.be.true;
  });

});
