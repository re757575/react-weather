import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppNavDrawer from '../../src/components/AppNavDrawer';

function setup() {
  const muiTheme = getMuiTheme();

  const props = {
    docked: false,
    location: {},
    onChangeList: spy(),
    onRequestChangeNavDrawer: spy(),
    open: false,
    style: {},
    width: 200
  };

  const wrapper = mount(
    <AppNavDrawer {...props} />, {
      context: { muiTheme },
      childContextTypes: {
        muiTheme: React.PropTypes.object,
        router: React.PropTypes.object
      }
    }
  );

  return {
    props,
    wrapper
  };
}

describe('<AppNavDrawer /> testing', () => {
  it('should have props and Drawer default is close', () => {
    const { props, wrapper } = setup();

    expect(wrapper.props()).to.deep.equal(props);
    expect(wrapper.find('div').get(1).style.opacity).to.be.equal('0');
    expect(wrapper.find('div').get(1).style.left).to.be.equal('-100%');
  });

  it('should have 2 Nav link', () => {
    const { wrapper } = setup();

    const Drawer = wrapper.find('Drawer');
    const SelectableList = wrapper.find('List');
    const ListItem = wrapper.find('ListItem');

    expect(Drawer.exists()).to.be.true;
    expect(SelectableList.exists()).to.be.true;
    expect(ListItem.exists()).to.be.true;
    expect(ListItem).to.have.length(2);

    ListItem.forEach((list, index) => {
      switch (index) {
        case 0:
          expect(list.prop('primaryText')).to.be.equal('Index');
          expect(list.prop('value')).to.be.equal('/index');
          break;
        case 1:
          expect(list.prop('primaryText')).to.be.equal('Page2');
          expect(list.prop('value')).to.be.equal('/page2');
          break;
        default:
          break;
      }
    });
  });

  it('should Drawer is open', () => {
    const { wrapper } = setup();

    wrapper.setProps({
      open: true
    });

    expect(wrapper.find('div').get(1).style.opacity).to.be.equal('1');
    expect(wrapper.find('div').get(1).style.left).to.be.equal('0px');
  });

  it.skip('should trigger onChangeList ', () => {
    const { props, wrapper } = setup();

    const link = wrapper.find({ value: '/index' });

    // FIXME: not work
    link.simulate('click');
    expect(props.onChangeList.called).to.be.true;
  });
});
