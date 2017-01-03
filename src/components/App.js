import React from 'react';
import AppBar from 'material-ui/AppBar';
import SelectCityList from '../containers/SelectCityListContainer';
import Weather from '../containers/WeatherContainer';
import Forecast from '../containers/ForecastContainer';
import FeachBtn from './FeachBtn';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
const App = () => (
  <div>
    <AppBar
      title="React Weather"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <div id="container">
      <SelectCityList/>
      <FeachBtn/>
      <Weather/>
      <Divider/>
      <Forecast/>
      <Divider/>
    </div>
  </div>
);

export default App;
