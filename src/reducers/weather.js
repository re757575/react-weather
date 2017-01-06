import {
  REQUEST_WEATHER,
  REQUEST_FORECAST,
  FETCH_WEATHER,
  FETCH_FORECAST,
  SELECT_CITY
} from '../constants/actionTypes';

const defaultState = {
  isFectingWeather: false,
  isFectingForecast: false,
  selectedCity: null,
  data: {
    current: null,
    forecast: null
  }
};

const weather = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        isFectingWeather: true,
        data: { current: null, forecast: state.data.forecast }
      };

    case REQUEST_FORECAST:
      return {
        ...state,
        isFectingForecast: true,
        data: { current: state.data.current, forecast: null }
      };

    case FETCH_WEATHER:
      return {
        ...state,
        isFectingWeather: false,
        data: { current: action.playload, forecast: state.data.forecast }
      };

    case FETCH_FORECAST:
      return {
        ...state,
        isFectingForecast: false,
        data: { current: state.data.current, forecast: action.playload }
      };

    case SELECT_CITY:
      return {
        ...state,
        selectedCity: action.cityId,
        data: { current: null, forecast: null }
      };

    default:
      return state;
  }
};

export default weather;
