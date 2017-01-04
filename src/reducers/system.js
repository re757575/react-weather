import {
  CHANGE_TO_OFFLINE,
  CHANGE_TO_ONLINE,
} from '../constants/actionTypes';

const defaultState = {
  isOffline: false
};

const system = (state = defaultState, action) => {

console.log(action.type);

  switch (action.type) {
    case CHANGE_TO_OFFLINE:
      return {
        isOffline: true
      };

    case CHANGE_TO_ONLINE:
      return {
        isOffline: false
      };

    default:
      return state;
  }
};

export default system;
