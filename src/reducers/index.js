import { combineReducers } from 'redux';
import weather from './weather';
import system from './system';

const rootReducer = combineReducers({
  weather,
  system
});

export default rootReducer;
