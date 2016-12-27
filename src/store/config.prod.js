import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers';
import interentDetector from '../middleware/interentDetector';

const store = createStore(
  rootReducer,
  applyMiddleware(interentDetector, thunk)
);

export default store;
