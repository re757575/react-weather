import devConfig from './config.dev';
import prodConfig from './config.prod';

let loadedStore = null;

if (process.env.NODE_ENV === 'production') {
  loadedStore = prodConfig;
} else {
  loadedStore = devConfig;
}

export default loadedStore;
