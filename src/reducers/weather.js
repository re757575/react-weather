import { REQUEST_WEATHER, FETCH_WEATHER } from '../actions';

const defaultState = {
  isFecting: false, data: {}
};

const weather = (state = defaultState, action) => {

  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        isFecting: true,
        data: {}
      };

    case FETCH_WEATHER:
      return {
        ...state,
        isFecting: false,
        data: action.playload
      };

    default:
      return state;
  }
};

export default weather;
