import React from 'react';
import SelectCityList from '../containers/SelectCityListContainer';
import Weather from '../containers/WeatherContainer';
import Forecast from '../containers/ForecastContainer';
import FeachBtn from './FeachBtn'; // eslint-disable-line import/no-named-as-default

const style = {
  selectCityList: {
    float: 'left',
    marginRight: '30px',
    width: 150
  },
  feachBtn: {
    marginTop: '30px'
  }
};

const Main = () => (
  <div>
    <SelectCityList style={style.selectCityList} />
    <FeachBtn style={style.feachBtn} />
    <Weather />
    <Forecast />
  </div>
);

export default Main;
