import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import DomMock from '../setup';
import { Weather } from '../../src/components/Weather';
import cityIdList from '../../src/constants/cityIdList';
import { getCityNameById } from '../../src/constants/cityIdList';

const CITY_ID = Object.keys(cityIdList[1]).toString();

function setup() {
  const props = {
    weatherData: {
      current: null
    },
    selectedCity: '',
    isFectingWeather: false
  }

  const wrapper = shallow(<Weather {...props} />);

  return {
    props,
    wrapper
  }
}

describe('<Weather/> testing', () => {

  before(() => {
    DomMock();
  });

  it('should no data', () => {
    const { wrapper } = setup();
    const div = wrapper.find('h3');

    expect(wrapper.find('h3').text()).contains('目前天氣');
    expect(wrapper.find('span').text()).to.be.equal('無資料');
  });

  it('should loading', () => {
    const { wrapper } = setup();

    wrapper.setProps({
      selectedCity: CITY_ID,
      isFectingWeather: true
    })

    expect(wrapper.find('h3').text()).to.be.equal(`${getCityNameById(CITY_ID)} 目前天氣`);
    expect(wrapper.find('span').text()).to.be.equal('取得目前天氣資料中...');
  });

  it.skip('should show data', () => {
    const { wrapper } = setup();

    wrapper.setProps({
      selectedCity: CITY_ID,
      isFectingWeather: false,
      weatherData: {
          current: {
            name: 'test',
            weather: [{ description: 'description' }],
            main: {
              temp: 20,
              temp_min: 10,
              temp_max: 30,
              humidity: 60
            },
           wind: { speed: 100 } 
          }
      }
    })
    
    console.log(wrapper.html()); 
  });

});
