import React, { PropTypes } from 'react';

const cityWeatherState = (weatherData, isFecting) => {

  if (isFecting && !weatherData.name) {
    return (
      <div>{'取得資料中...'}</div>
    );
  } else if (!isFecting && !weatherData.name) {
    return (
      <div>{'無資料'}</div>
    );
  }

  return (<div>
    <ul>
      <li>城市: {weatherData.name}</li>
      <li>天氣: {weatherData.weather[0].description}</li>
      <li>溫度: {Math.floor(weatherData.main.temp)} ({weatherData.main.temp_min}~{weatherData.main.temp_max})℃</li>
      <li>濕度: {weatherData.main.humidity} %</li>
      <li>陣風: {weatherData.wind.speed} m/s</li>
    </ul>
  </div>);
};

const AppWeather = ({weatherData, selectedCity, isFecting, onGetWeatherData}) => {

  const handleGetWeatherData = () => {
    onGetWeatherData(selectedCity);
  };

  return (
    <div>
      <span><button disabled={!selectedCity} onClick={handleGetWeatherData}>get weather</button></span>
      {cityWeatherState(weatherData, isFecting)}
    </div>
  )
};

AppWeather.propTypes = {
  weatherData: PropTypes.object,
  selectedCity: PropTypes.string,
  isFecting: PropTypes.bool.isRequired,
  onGetWeatherData: PropTypes.func.isRequired
}

export default AppWeather;
