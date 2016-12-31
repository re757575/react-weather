import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import interentDetector from '../middleware/interentDetector';

const logger = createLogger();

const enhancer = applyMiddleware(interentDetector, thunk, logger);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;

}
