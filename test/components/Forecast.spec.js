import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Forecast from '../../src/components/Forecast';
import { cityIdList, getCityNameById } from '../../src/constants/cityIdList';

const CITY_ID = Object.keys(cityIdList[1]).toString();

function setup() {
  const muiTheme = getMuiTheme();

  const props = {
    weatherData: {
      forecast: null
    },
    selectedCity: '',
    isFectingForecast: false,
    onGetForecastData: spy()
  };

  const wrapper = mount(
    <Forecast {...props} />, {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object }
    }
  );

  return {
    props,
    wrapper
  };
}

describe('<Forecast /> testing', () => {
  it('should have props', () => {
    const { props, wrapper } = setup();

    expect(wrapper.props()).to.deep.equal(props);
  });

  it('should no data', () => {
    const { wrapper } = setup();
    const Card = wrapper.find('Card');
    const CardHeader = wrapper.find('CardHeader');
    const CardText = wrapper.find('CardText');

    wrapper.setProps({
      selectedCity: '',
    });

    expect(Card.exists()).to.be.true;

    expect(CardHeader.exists()).to.be.true;
    expect(CardHeader.prop('title')).to.be.equal(getCityNameById(''));
    expect(CardHeader.prop('subtitle')).to.be.equal('天氣預報');

    expect(CardText.exists()).to.be.true;
    expect(CardText.find('span').text()).to.be.equal('無資料');
  });

  it('should loading', () => {
    const { wrapper } = setup();

    wrapper.setProps({
      selectedCity: CITY_ID,
      isFectingForecast: true
    });

    const Card = wrapper.find('Card');
    const CardHeader = wrapper.find('CardHeader');
    const CardText = wrapper.find('CardText');

    expect(Card.exists()).to.be.true;

    expect(CardHeader.exists()).to.be.true;
    expect(CardHeader.prop('title')).to.be.equal(getCityNameById(CITY_ID));
    expect(CardHeader.prop('subtitle')).to.be.equal('天氣預報');

    expect(CardText.find('circle')).to.have.length(1);
  });

  it('should show data', () => {
    const { wrapper } = setup();

    const weatherData = {
      forecast: {
        list: [
          {
            weather: [{ description: 'description' }],
            main: {
              temp: 20,
              temp_min: 10,
              temp_max: 30,
              humidity: 60
            },
            wind: { speed: 100 }
          },
          {
            weather: [{ description: 'description' }],
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

    const Card = wrapper.find('Card');
    const CardHeader = wrapper.find('CardHeader');
    const FlatButton = wrapper.find('FlatButton');
    const CardActions = wrapper.find('CardActions');
    const CardText = wrapper.find('CardText');

    expect(Card.exists()).to.be.true;

    expect(CardHeader.exists()).to.be.true;
    expect(CardHeader.prop('title')).to.be.equal(getCityNameById(CITY_ID));
    expect(CardHeader.prop('subtitle')).to.be.equal('天氣預報');

    expect(CardActions.exists()).to.be.true;

    expect(FlatButton.exists()).to.be.true;
    expect(FlatButton.prop('label')).to.be.equal('重新讀取');
    expect(FlatButton.prop('onTouchTap')).to.be.function;
    expect(FlatButton.prop('disabled')).to.be.false;

    expect(CardText.exists()).to.be.true;
    expect(CardText.find('ul')).to.have.length(weatherData.forecast.list.length);

    // loading false
    expect(wrapper.find('circle')).to.have.length(0);
  });
});
