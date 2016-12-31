import devConfig from './configureStore.development';
import prodConfig from './configureStore.production';

let loadedStore = null;

if (process.env.NODE_ENV === 'production') {
  loadedStore = prodConfig;
} else {
  loadedStore = devConfig;
}

export default loadedStore;
