import { expect } from 'chai';
import { spy } from 'sinon'
import React from 'react';
import { shallow, mount } from 'enzyme';
import Forecast from '../../src/components/Forecast';
import cityIdList from '../../src/constants/cityIdList';
import { getCityNameById } from '../../src/constants/cityIdList';

const CITY_ID = Object.keys(cityIdList[1]).toString();

function setup() {
  const props = {
    weatherData: {
      forecast: null
    },
    selectedCity: '',
    isFectingForecast: false,
    onGetForecastData: spy()
  }

  const wrapper = shallow(<Forecast {...props} />);

  return {
    props,
    wrapper
  }
}

describe('<Forecast /> testing', () => {
  it('should no data', () => {
    const { wrapper } = setup();
    const div = wrapper.find('h3');

    expect(wrapper.find('h3').text()).contains('天氣預報');
    expect(wrapper.find('span').text()).to.be.equal('無資料');
  });

  it('should loading', () => {
    const { wrapper } = setup();

    wrapper.setProps({
      selectedCity: CITY_ID,
      isFectingForecast: true
    })

    expect(wrapper.find('h3').text()).to.be.equal(`${getCityNameById(CITY_ID)} 天氣預報`);
    expect(wrapper.find('span').text()).to.be.equal('取得天氣預報資料中...');
  });

  it('should show data', () => {
    const { props, wrapper } = setup();

    const weatherData = {
      forecast: {
        list: [
          {
            weather:[{ description: 'description' }],
            main: {
              temp: 20,
              temp_min: 10,
              temp_max: 30,
              humidity: 60
            },
            wind: { speed: 100 }
          },
          {
            weather:[{ description: 'description' }],
            main: {
              temp: 20,
              temp_min: 10,
              temp_max: 30,
              humidity: 60
            },
            wind: { speed: 100 }
          }
        ]
      }
    };

    wrapper.setProps({
      selectedCity: CITY_ID,
      isFectingForecast: false,
      weatherData 
    });

    expect(wrapper.find('h3').text()).to.be.equal(`${getCityNameById(CITY_ID)} 天氣預報`);
    expect(wrapper.find('ReloadDataLink').exists()).to.be.true;
    expect(wrapper.find('ReloadDataLink').prop('reloadType')).to.be.equal('forecast')
    expect(wrapper.find('ReloadDataLink').prop('selectedCity')).to.be.equal(CITY_ID)
    expect(wrapper.find('ReloadDataLink').prop('onReload')).to.be.functon;
    expect(wrapper.find('ul')).to.have.length(2);
  });
});
