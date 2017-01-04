import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import cityList, { getCityNameById } from '../constants/cityIdList.js';
import ReloadDataLink from './ReloadDataLink';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionAutorenew from 'material-ui/svg-icons/action/autorenew';

const currentCityWeatherState = (weatherData, isFectingWeather, selectedCity, onGetCurrentWeatherData) => {

  let divStyle = {
    marginTop: '20px',
    pointerEvents: !selectedCity ? 'none' : ''
  };

  if (isFectingWeather && !weatherData.current) {
    return (
      <div style={divStyle}>
        <Card>
          <CardHeader
            title={getCityNameById(selectedCity)}
            subtitle="目前天氣"
          />
          <CardText>
            <span><CircularProgress size={20}/></span>
          </CardText>
        </Card>
      </div>
    );
  } else if (!isFectingWeather && !weatherData.current) {
    return (
      <div style={divStyle}>
        <Card>
          <CardHeader
            title={getCityNameById(selectedCity)}
            subtitle="目前天氣"
          />
          <CardText>
            <span>{'無資料'}</span>
          </CardText>
        </Card>
      </div>
    );
  }

  return (<div style={divStyle}>
    <Card>
      <CardHeader
        title={getCityNameById(selectedCity)}
        subtitle="目前天氣"
      />
      <CardActions>
        <FlatButton
          label="重新讀取"
          labelPosition="before"
          primary={true}
          icon={<ActionAutorenew />}
          onTouchTap={() => onGetCurrentWeatherData(selectedCity)}
        />
      </CardActions>
      <CardText style={{padding: '5px'}}>
        <ul style={{listStyleType: 'none', lineHeight: '25px'}}>
          <li>城市: {weatherData.current.name}</li>
          <li>天氣: {weatherData.current.weather[0].description}</li>
          <li>
            溫度: {Math.floor(weatherData.current.main.temp)} 
            ({weatherData.current.main.temp_min}~{weatherData.current.main.temp_max})℃
          </li>
          <li>濕度: {weatherData.current.main.humidity} %</li>
          <li>陣風: {weatherData.current.wind.speed} m/s</li>
        </ul>
      </CardText>
    </Card>
  </div>);
};

const Weather = ({
    weatherData,
    selectedCity,
    isFectingWeather,
    onGetCurrentWeatherData
  }) => {

    return (
      <div>
        {currentCityWeatherState(weatherData,
          isFectingWeather, selectedCity, onGetCurrentWeatherData)}
      </div>
    )
};

Weather.propTypes = {
  weatherData: PropTypes.object,
  selectedCity: PropTypes.string,
  isFectingWeather: PropTypes.bool.isRequired,
  onGetCurrentWeatherData: PropTypes.func.isRequired
}

export default Weather;
