import { REQUEST_WEATHER, REQUEST_FORECAST } from '../actions';

const interentDetector = store => next => action => {

  if (action.type === REQUEST_WEATHER ||
      action.type === REQUEST_FORECAST) {
    if (!navigator.onLine) {
      alert('網路連線異常');
      throw new Error('INTERNET DISCONNECTED.');
    }
  }
  
  let result = next(action);
  return result;
}

export default interentDetector;
