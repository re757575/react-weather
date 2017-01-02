import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('<App />  testing', () => {
  it('should have an h1', () => {
    const wrapper = shallow(<App />); 
    expect(wrapper.children()).to.be.length(5);
    expect(wrapper.find('h1').text()).to.be.equal('React Weather');
  });
});