import { REQUEST_WEATHER, REQUEST_FORECAST } from '../constants/actionTypes';
import { changeOfflineStatus } from '../actions';

const interentDetector = store => next => action => {
  if (action.type === REQUEST_WEATHER ||
      action.type === REQUEST_FORECAST) {
    if (!navigator.onLine) {
      store.dispatch(changeOfflineStatus(true));
      throw new Error('INTERNET DISCONNECTED.');
    } else {
      store.dispatch(changeOfflineStatus(false));
    }
  }

  const result = next(action);
  return result;
};

export default interentDetector;
