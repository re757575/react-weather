import { REQUEST_WEATHER, FETCH_WEATHER, SELECT_CITY } from '../actions';

const defaultState = {
  isFecting: false,
  selectedCity: null,
  data: {}
};

const weather = (state = defaultState, action) => {

  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        isFecting: true,
        data: {}
      };

    case FETCH_WEATHER:
      return {
        ...state,
        isFecting: false,
        data: action.playload
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
