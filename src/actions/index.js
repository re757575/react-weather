import fetch from 'isomorphic-fetch';

import {
  REQUEST_WEATHER,
  REQUEST_FORECAST,
  FETCH_WEATHER,
  FETCH_FORECAST,
  SELECT_CITY
} from '../constants/actionTypes';

export const requstWeather = function() {
  return {
    type: REQUEST_WEATHER
  }
};

export const requstForecast = function() {
  return {
    type: REQUEST_FORECAST
  }
};

export const getCurrentWeatherData = function(cityId) {

  const APPID = '3a494cb65411295b23e82358cf4f07f6';
  let url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${APPID}&units=metric&lang=zh_tw`;

  // https://github.com/reactjs/redux/issues/1676
  // Redux Thunk will inject dispatch here
  return dispatch => {

    // flag isFecting = true
    dispatch(requstWeather());

    return fetch(url)
        .then(response => response.json())
        .then(json => {
          dispatch({
            type: FETCH_WEATHER,
            playload: json
          });
        })
        .catch(ex => console.log('parsing failed', ex));
  }
};

export const getForecastData = function(cityId) {

  const APPID = '3a494cb65411295b23e82358cf4f07f6';
  const count = 9;
  let url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${APPID}&cnt=${count}&units=metric&lang=zh_tw`;

  return dispatch => {

    dispatch(requstForecast());

    return fetch(url)
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            dispatch({
              type: FETCH_FORECAST,
              playload: json
            });
          }, 200);
        })
        .catch(ex => console.log('parsing failed', ex));
  }
}

export const selectCity = function(cityId) {  
  return {
    type: SELECT_CITY,
    cityId: cityId
  };
};
