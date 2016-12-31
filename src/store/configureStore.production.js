import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers';
import interentDetector from '../middleware/interentDetector';

const enhancer = applyMiddleware(interentDetector, thunk);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer, initialState, enhancer);
}
