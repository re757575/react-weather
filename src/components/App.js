import React from 'react';
import SelectCityList from '../containers/SelectCityListContainer';
import Weather from '../containers/WeatherContainer';
import Forecast from '../containers/ForecastContainer';
import FeachBtn from './FeachBtn';

const App = () => (
  <div>
    <h1>React Weather</h1>
    <SelectCityList/>
    <FeachBtn/>
    <Weather/>
    <Forecast/>
  </div>
);

export default App;
