import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import { cityIdList } from '../../src/constants/cityIdList';
import * as types from '../../src/constants/actionTypes';
import * as actions from '../../src/actions/index';

const APP_ID = '3a494cb65411295b23e82358cf4f07f6';
const CITY_ID = Object.keys(cityIdList[1]).toString();

// 建立 mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions testing', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create requstWeather action', () => {
    expect(actions.requstWeather()).to.deep.equal({ type: types.REQUEST_WEATHER });
  });

  it('should create requstForecast action', () => {
    expect(actions.requstForecast()).to.deep.equal({ type: types.REQUEST_FORECAST });
  });

  it('should create getCurrentWeatherData action', () => {
    const fn = actions.getCurrentWeatherData;
    expect(fn()).to.be.a('function');

    // mock HTTP 連線
    nock('http://api.openweathermap.org')
      .get('/data/2.5/weather')
      .query({
        id: CITY_ID,
        APPID: APP_ID,
        units: 'metric',
        lang: 'zh_tw'
      })
      .reply(200, {});

    const expectedActions = [
      { type: types.REQUEST_WEATHER },
      { type: types.FETCH_WEATHER, playload: {} }
    ];

    const store = mockStore({});
    return store.dispatch(fn(CITY_ID))
      .then(() => {
        expect(
          store.getActions()
        ).to.be.deep.equal(expectedActions);
      });
  });

  it('should create getForecastData action', (cb) => {
    const fn = actions.getForecastData;
    expect(fn()).to.be.a('function');

    // mock HTTP 連線
    nock('http://api.openweathermap.org')
      .get('/data/2.5/forecast')
      .query({
        id: CITY_ID,
        APPID: APP_ID,
        cnt: 9,
        units: 'metric',
        lang: 'zh_tw'
      })
      .reply(200, {});

    const expectedActions = [
      { type: types.REQUEST_FORECAST },
      { type: types.FETCH_FORECAST, playload: {} }
    ];

    const store = mockStore({});
    store.dispatch(fn(CITY_ID))
      .then(() => {
        setTimeout(() => {
          expect(
            store.getActions()
          ).to.be.deep.equal(expectedActions);
          return cb();
        }, 200);
      });
  });

  it('should create selectCity action', () => {
    const expectedActions = {
      type: types.SELECT_CITY,
      cityId: CITY_ID
    };

    expect(actions.selectCity(CITY_ID)).to.deep.equal(expectedActions);
  });
});
