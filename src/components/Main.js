import React from 'react';
import SelectCityList from '../containers/SelectCityListContainer';
import Weather from '../containers/WeatherContainer';
import Forecast from '../containers/ForecastContainer';
import FeachBtn from './FeachBtn'; // eslint-disable-line import/no-named-as-default

const Main = () => (
  <div>
    <SelectCityList />
    <FeachBtn />
    <Weather />
    <Forecast />
  </div>
);

export default Main;
