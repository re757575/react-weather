import { expect } from 'chai';
import weather from '../../src/reducers/weather';
import * as types from '../../src/constants/actionTypes';

describe('weather reducer testing', () => {

  let preState;

  beforeEach(() => {
    preState = {
      isFectingWeather: false,
      isFectingForecast: false,
      selectedCity: null,
      data: {
        current: null,
        forecast: null
      } 
    };
  });

  it('should handle initial state', () => {
    const expectedState = {
      isFectingWeather: false,
      isFectingForecast: false,
      selectedCity: null,
      data: {
        current: null,
        forecast: null
      } 
    };

    expect(
      weather(preState, {})
    ).to.deep.equal(expectedState);
  });

  it('should handle REQUEST_WEATHER', () => {
    const expectedState = {
      ...preState,
      isFectingWeather: true,      
    }
    expect(
      weather(preState, {
        type: types.REQUEST_WEATHER
      })
    ).to.deep.equal(expectedState);
  });

  it('should handle REQUEST_FORECAST', () => {
    const expectedState = {
      ...preState,
      isFectingForecast: true,      
    }
    expect(
      weather(preState, {
        type: types.REQUEST_FORECAST
      })
    ).to.deep.equal(expectedState);
  });

  it('should handle FETCH_WEATHER', () => {
    const expectedState = {
      ...preState,
      isFectingWeather: false,      
      data: { current: {}, forecast: preState.data.forecast }
    }

    expect(
      weather(preState, {
        type: types.FETCH_WEATHER,
        playload: {}
      })
    ).to.deep.equal(expectedState);
  });

  it('should handle FETCH_FORECAST', () => {
    const expectedState = {
      ...preState,
      isFectingForecast: false,      
      data: { current: preState.data.current, forecast: {} }
    }

    expect(
      weather(preState, {
        type: types.FETCH_FORECAST,
        playload: {}
      })
    ).to.deep.equal(expectedState);
  });

  it('should handle SELECT_CITY', () => {
    const cityId = '123';
    const expectedState = {
      ...preState,
      selectedCity: cityId,
      data: { current: null, forecast: null }
    }

    expect(
      weather(preState, {
        type: types.SELECT_CITY,
        cityId: cityId
      })
    ).to.deep.equal(expectedState);
  });
});