import {
  REQUEST_WEATHER,
  REQUEST_FORECAST,
  FETCH_WEATHER,
  FETCH_FORECAST,
  SELECT_CITY
} from '../constants/actionTypes';

const defaultState = {
  isFecting: false,
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
        isFecting: true,
        data: {current: null, forecast: state.data.forecast}
      };

    case REQUEST_FORECAST:
      return {
        ...state,
        isFecting: true,
        data: {current: state.data.current, forecast: null}
      };

    case FETCH_WEATHER:
      return {
        ...state,
        isFecting: false,
        data: { current: action.playload, forecast: state.data.forecast }
      };

    case FETCH_FORECAST:
      return {
        ...state,
        isFecting: false,
        data: { current: state.data.current, forecast: action.playload }
      };

    case SELECT_CITY:
      return {
        ...state,
        selectedCity: action.cityId
      };

    default:
      return state;
  }
};

export default weather;
