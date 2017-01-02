import { expect } from 'chai';
import { spy } from 'sinon'
import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../../src/components/Weather';
import cityIdList from '../../src/constants/cityIdList';
import { getCityNameById } from '../../src/constants/cityIdList';

const CITY_ID = Object.keys(cityIdList[1]).toString();

function setup() {
  const props = {
    weatherData: {
      current: null
    },
    selectedCity: '',
    isFectingWeather: false,
    onGetCurrentWeatherData: spy()
  }

  const wrapper = shallow(<Weather {...props} />);

  return {
    props,
    wrapper
  }
}

describe('<Weather /> testing', () => {
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

  it('should show data', () => {
    const { wrapper } = setup();

    const weatherData = {
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
    };

    wrapper.setProps({
      selectedCity: CITY_ID,
      isFectingWeather: false,
      weatherData 
    });

    expect(wrapper.find('h3').text()).to.be.equal(`${getCityNameById(CITY_ID)} 目前天氣`);
    expect(wrapper.find('ReloadDataLink').exists()).to.be.true;
    expect(wrapper.find('ReloadDataLink').prop('reloadType')).to.be.equal('weather')
    expect(wrapper.find('ReloadDataLink').prop('selectedCity')).to.be.equal(CITY_ID)
    expect(wrapper.find('ReloadDataLink').prop('onReload')).to.be.functon;
    expect(wrapper.find('ul').exists()).to.be.true;
    expect(wrapper.find('li')).to.have.length(5);
    expect(wrapper.find('li').get(0).props.children[1])
      .to.be.equal(weatherData.current.name);
  });
});
