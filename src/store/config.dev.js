import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import interentDetector from '../middleware/interentDetector';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(interentDetector, thunk, logger)
);

export default store;
