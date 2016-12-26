import React from 'react';
import SelectCityList from '../containers/SelectCityListContainer';
import AppWeather from '../containers/AppWeatherContainer';

const App = () => (
  <div>
    <h1>React Weather</h1>
    <SelectCityList/>
    <AppWeather/>
  </div>
);

export default App;
