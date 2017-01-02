import React, { PropTypes } from 'react';
import cityList, { getCityNameById } from '../constants/cityIdList.js';
import ReloadDataLink from './ReloadDataLink';

const currentCityWeatherState = (weatherData, isFectingWeather, selectedCity) => {

  let divStyle = {
    marginTop: '10px',
    minHeight: '200px',
    pointerEvents: !selectedCity ? 'none' : ''
  };

  if (isFectingWeather && !weatherData.current) {
    return (
      <div style={divStyle}>
        <h3>{getCityNameById(selectedCity)} 目前天氣</h3>
        <span>{'取得目前天氣資料中...'}</span>
      </div>
    );
  } else if (!isFectingWeather && !weatherData.current) {
    return (
      <div style={divStyle}>
        <h3>{getCityNameById(selectedCity)} 目前天氣</h3>
        <span>{'無資料'}</span>
      </div>
    );
  }

  return (<div style={divStyle}>
    <h3>{getCityNameById(selectedCity)} 目前天氣</h3> 
    <ReloadDataLink reloadType="weather"/>
    <ul>
      <li>城市: {weatherData.current.name}</li>
      <li>天氣: {weatherData.current.weather[0].description}</li>
      <li>溫度: {Math.floor(weatherData.current.main.temp)} ({weatherData.current.main.temp_min}~{weatherData.current.main.temp_max})℃</li>
      <li>濕度: {weatherData.current.main.humidity} %</li>
      <li>陣風: {weatherData.current.wind.speed} m/s</li>
    </ul>
  </div>);
};

export const Weather = ({
    weatherData,
    selectedCity,
    isFectingWeather
  }) => {

    return (
      <div>
        {currentCityWeatherState(weatherData, isFectingWeather, selectedCity)}
        <hr/>
      </div>
    )
};

Weather.propTypes = {
  weatherData: PropTypes.object,
  selectedCity: PropTypes.string,
  isFectingWeather: PropTypes.bool.isRequired
}

export default Weather;
