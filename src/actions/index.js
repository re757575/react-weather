import {
  REQUEST_WEATHER,
  FETCH_WEATHER,
  SELECT_CITY
} from '../constants/actionTypes';

export const requstWeather = function() {
  return {
    type: REQUEST_WEATHER
  }
};

export const getWeatherData = function(cityId) {

  const APPID = '3a494cb65411295b23e82358cf4f07f6';
  let url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${APPID}`;

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

export const selectCity = function(cityId) {
  return {
    type: SELECT_CITY,
    cityId: cityId
  };
};
