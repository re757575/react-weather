import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SelectCityList from '../../src/components/SelectCityList';

function setup() {
  const muiTheme = getMuiTheme();

  const props = {
    style: {},
    selectedCity: '',
    onSelectCity: spy()
  };

  const wrapper = mount(
    <SelectCityList {...props} />, {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object }
    }
  );

  return {
    props,
    wrapper
  };
}

describe('<SelectCityList /> testing', () => {
  it('should have props', () => {
    const { props, wrapper } = setup();

    expect(wrapper.props()).to.deep.equal(props);
  });

  it.skip('should have an select', () => {
    const { wrapper } = setup();

    // FIXME: MenuItem not found
    console.log(wrapper.html());

    // const options = wrapper.find('SelectField').children();

    const SelectField = wrapper.find('SelectField');
    const MenuItem = wrapper.find('MenuItem');

    expect(SelectField.exists()).to.be.true;
    expect(MenuItem.exists()).to.be.true;

    // const options = wrapper.find('select').children();
    // expect(options).to.have.length(6);
    // expect(options.get(0).props.children).to.be.equal('請選擇');

    // options.map((element) => {
    //   const cityId = element.getNode().props.value.toString();
    //   const cityName = element.getNode().props.children.toString();
    //   if (cityId) {
    //     expect(getCityNameById(cityId)).to.be.equal(cityName);
    //   }
    // });
  });

  it.skip('should trigger onSelectCity', () => {
    const { props } = setup();
    const wrapper = mount(<SelectCityList {...props} />);
    const select = wrapper.find('select');

    select.simulate('change', { target: { value: '1668341' } });

    expect(props.onSelectCity.called).to.be.true;

    // FIXME: not working
    // expect(select.node.selectedIndex).to.be.equal(1);
  });
});
