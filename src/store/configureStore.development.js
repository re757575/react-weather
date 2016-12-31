import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import interentDetector from '../middleware/interentDetector';

const logger = createLogger();

// https://github.com/zalmoxisus/redux-devtools-extension
// https://github.com/chentsulin/electron-react-boilerplate/blob/master/app/store/configureStore.development.js
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    // actionCreators,
  }) :
  compose;

const enhancer = composeEnhancers(
  applyMiddleware(interentDetector, thunk, logger)
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // FIXME: not working
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () => 
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
