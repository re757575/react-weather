import { expect } from 'chai';
import { spy } from 'sinon'
import React, { PropTypes } from 'react';
import { shallow, mount } from 'enzyme';
import Weather from '../../src/components/Weather';
import cityIdList from '../../src/constants/cityIdList';
import { getCityNameById } from '../../src/constants/cityIdList';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const CITY_ID = Object.keys(cityIdList[1]).toString();

function setup() {
  const muiTheme = getMuiTheme();

  const props = {
    weatherData: {
      current: null
    },
    selectedCity: '',
    isFectingWeather: false,
    onGetCurrentWeatherData: spy()
  }

  const wrapper = mount(
    <Weather {...props} />, {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    }
  );

  return {
    props,
    wrapper
  }
}

describe('', () => {
  
});('<Weather /> testing', () => {

  it('should have props', () => {
    const { props, wrapper } = setup();

    expect(wrapper.props()).to.deep.equal(props);
  })
  
  it('should no data', () => {
    let CITY_ID = '';
    const { wrapper } = setup();
    const Card = wrapper.find('Card');
    const CardHeader = wrapper.find('CardHeader');
    const CardText = wrapper.find('CardText');

    expect(Card.exists()).to.be.true;

    expect(CardHeader.exists()).to.be.true;
    expect(CardHeader.prop('title')).to.be.equal(getCityNameById(CITY_ID));
    expect(CardHeader.prop('subtitle')).to.be.equal('目前天氣');

    expect(CardText.exists()).to.be.true;
    expect(CardText.find('span').text()).to.be.equal('無資料');
  });

  it('should loading', () => {
    const { wrapper } = setup();

    wrapper.setProps({
      selectedCity: CITY_ID,
      isFectingWeather: true
    })

    const Card = wrapper.find('Card');
    const CardHeader = wrapper.find('CardHeader');
    const CardText = wrapper.find('CardText');

    expect(Card.exists()).to.be.true;

    expect(CardHeader.exists()).to.be.true;
    expect(CardHeader.prop('title')).to.be.equal(getCityNameById(CITY_ID));
    expect(CardHeader.prop('subtitle')).to.be.equal('目前天氣');

    expect(wrapper.find('circle')).to.have.length(1);
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

    const Card = wrapper.find('Card');
    const CardHeader = wrapper.find('CardHeader');
    const FlatButton = wrapper.find('FlatButton');
    const CardActions = wrapper.find('CardActions');
    const CardText = wrapper.find('CardText');

    expect(Card.exists()).to.be.true;

    expect(CardHeader.exists()).to.be.true;
    expect(CardHeader.prop('title')).to.be.equal(getCityNameById(CITY_ID));
    expect(CardHeader.prop('subtitle')).to.be.equal('目前天氣');

    expect(CardActions.exists()).to.be.true;

    expect(FlatButton.exists()).to.be.true;
    expect(FlatButton.prop('label')).to.be.equal('重新讀取');
    expect(FlatButton.prop('onTouchTap')).to.be.function;
    expect(FlatButton.prop('disabled')).to.be.false;

    expect(CardText.exists()).to.be.true;
    expect(CardText.find('ul')).to.have.length(1);

    // loading false
    expect(wrapper.find('circle')).to.have.length(0);
  });
});
