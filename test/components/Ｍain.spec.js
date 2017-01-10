import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../src/components/Main';

function setup() {
  const props = {
  };

  const wrapper = shallow(
    <Main {...props} />
  );

  return {
    props,
    wrapper
  };
}

describe('<Main />  testing', () => {
  it('should exists', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.children()).to.have.length(4);
  });
});
