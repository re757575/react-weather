import React, { PropTypes } from 'react';
import cityList, { getCityNameById } from '../constants/cityIdList.js';

const currentCityWeatherState = (weatherData, isFectingWeather, selectedCity, onGetCurrentWeatherData) => {

  let divStyle = {
    marginTop: '10px',
    minHeight: '200px',
    pointerEvents: !selectedCity ? 'none' : ''
  };

  let reloadLinkStyle = {
    color: !selectedCity ? 'gray' : '',
    textDecoration: 'none'
  }

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
    <a href="javascript:void(0)" style={reloadLinkStyle} onClick={() => onGetCurrentWeatherData(selectedCity)}>重新讀取</a>
    <ul>
      <li>城市: {weatherData.current.name}</li>
      <li>天氣: {weatherData.current.weather[0].description}</li>
      <li>溫度: {Math.floor(weatherData.current.main.temp)} ({weatherData.current.main.temp_min}~{weatherData.current.main.temp_max})℃</li>
      <li>濕度: {weatherData.current.main.humidity} %</li>
      <li>陣風: {weatherData.current.wind.speed} m/s</li>
    </ul>
  </div>);
};

const forecastState = (weatherData, isFectingForecast, selectedCity, onGetForecastData) => {

  let divStyle = {
    minHeight: '2200px',
    pointerEvents: !selectedCity ? 'none' : ''
  };

  let reloadLinkStyle = {
    color: !selectedCity ? 'gray' : '',
    textDecoration: 'none'
  }

  if (isFectingForecast && !weatherData.forecast) {
    return (
      <div style={divStyle}>
        <h3>{getCityNameById(selectedCity)} 天氣預報</h3>
        <div>{'取得天氣預報資料中...'}</div>
      </div>
    );
  } else if (!isFectingForecast && !weatherData.forecast) {
    return (
      <div style={divStyle}>
        <h3>{getCityNameById(selectedCity)} 天氣預報</h3>
        <span>{'無資料'}</span>
      </div>
    );
  }

  const list = weatherData.forecast.list.map((v, k) => {
    return (<div key={k}>
      <ul>
        <li>天氣: {v.weather[0].description}</li>
        <li>溫度: {Math.floor(v.main.temp)} ({v.main.temp_min}~{v.main.temp_max})℃</li>
        <li>濕度: {v.main.humidity} %</li>
        <li>陣風: {v.wind.speed} m/s</li>
        <li>{v.dt_txt}</li>
      </ul>
    </div>);
  });

  return (
    <div style={divStyle}>
      <h3>{getCityNameById(selectedCity)} 天氣預報</h3>
      <a href="javascript:void(0)" style={reloadLinkStyle} onClick={() => onGetForecastData(selectedCity)}>重新讀取</a>
      {list}
    </div>
  );
};

const AppWeather = ({
    weatherData,
    selectedCity,
    isFectingWeather,
    isFectingForecast,
    onGetCurrentWeatherData,
    onGetForecastData
  }) => {

    const handleGetWeatherData = () => {
      onGetCurrentWeatherData(selectedCity);
      onGetForecastData(selectedCity);
    };

    return (
      <div>
        <button disabled={!selectedCity} onClick={handleGetWeatherData}>查詢</button>
        {currentCityWeatherState(weatherData, isFectingWeather, selectedCity, onGetCurrentWeatherData)}
        <hr/>
        {forecastState(weatherData, isFectingForecast, selectedCity, onGetForecastData)}
      </div>
    )
};

AppWeather.propTypes = {
  weatherData: PropTypes.object,
  selectedCity: PropTypes.string,
  isFectingWeather: PropTypes.bool.isRequired,
  isFectingForecast: PropTypes.bool.isRequired,
  onGetCurrentWeatherData: PropTypes.func.isRequired,
  onGetForecastData: PropTypes.func.isRequired
}

export default AppWeather;
