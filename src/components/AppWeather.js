import React, { PropTypes } from 'react';

const currentCityWeatherState = (weatherData, isFecting) => {

  if (isFecting && !weatherData.current) {
    return (
      <div>{'取得目前天氣資料中...'}</div>
    );
  } else if (!isFecting && !weatherData.current) {
    return (
      <div>{'無目前天氣資料'}</div>
    );
  }

  return (<div>
    <h3>目前天氣</h3>
    <ul>
      <li>城市: {weatherData.current.name}</li>
      <li>天氣: {weatherData.current.weather[0].description}</li>
      <li>溫度: {Math.floor(weatherData.current.main.temp)} ({weatherData.current.main.temp_min}~{weatherData.current.main.temp_max})℃</li>
      <li>濕度: {weatherData.current.main.humidity} %</li>
      <li>陣風: {weatherData.current.wind.speed} m/s</li>
    </ul>
  </div>);
};

const forecastState = (weatherData, isFecting) => {

  if (isFecting && !weatherData.forecast) {
    return (
      <div>{'取得天氣預報資料中...'}</div>
    );
  } else if (!isFecting && !weatherData.forecast) {
    return (
      <div>{'無天氣預報資料'}</div>
    );
  }

  const list = weatherData.forecast.list.map((v, k) => {
    return (<div key={k}>
      <ul>
        <li>天氣: {v.weather[0].description}</li>
        <li>濕度: {v.main.humidity} %</li>
        <li>陣風: {v.wind.speed} m/s</li>
        <li>{v.dt_txt}</li>
      </ul>
    </div>);
  });

  return (
    <div>
      <h3>天氣預報</h3>
      {list}
    </div>
  );

};

const AppWeather = ({
    weatherData,
    selectedCity,
    isFecting,
    onGetCurrentWeatherData,
    onGetForecastData
  }) => {

    const handleGetWeatherData = () => {
      onGetCurrentWeatherData(selectedCity);
      onGetForecastData(selectedCity);
    };

    return (
      <div>
        <span><button disabled={!selectedCity} onClick={handleGetWeatherData}>get weather</button></span>
        {currentCityWeatherState(weatherData, isFecting)}
        <hr/>
        {forecastState(weatherData, isFecting)}
      </div>
    )
};

AppWeather.propTypes = {
  weatherData: PropTypes.object,
  selectedCity: PropTypes.string,
  isFecting: PropTypes.bool.isRequired,
  onGetCurrentWeatherData: PropTypes.func.isRequired,
  onGetForecastData: PropTypes.func.isRequired
}

export default AppWeather;
