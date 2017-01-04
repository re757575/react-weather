import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import cityList, { getCityNameById } from '../constants/cityIdList.js';
import ReloadDataLink from './ReloadDataLink';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionAutorenew from 'material-ui/svg-icons/action/autorenew';
import Divider from 'material-ui/Divider';

const forecastState = (weatherData, isFectingForecast, selectedCity, onGetForecastData) => {

  let divStyle = {
    marginTop: '20px',
    pointerEvents: !selectedCity ? 'none' : ''
  };

  if (isFectingForecast && !weatherData.forecast) {
    return (
      <div style={divStyle}>
        <Card>
          <CardHeader
            title={getCityNameById(selectedCity)}
            subtitle="天氣預報"
          />
          <CardText>
            <span><CircularProgress size={20}/></span>
          </CardText>
        </Card>
      </div>
    );
  } else if (!isFectingForecast && !weatherData.forecast) {
    return (
      <div style={divStyle}>
        <Card>
          <CardHeader
            title={getCityNameById(selectedCity)}
            subtitle="天氣預報"
          />
          <CardText>
            <span>{'無資料'}</span>
          </CardText>
        </Card>
      </div>
    );
  }

  const list = weatherData.forecast.list.map((v, k) => {
    return (<div key={k}>
      <ul style={{listStyleType: 'none', lineHeight: '25px'}}>
        <li>天氣: {v.weather[0].description}</li>
        <li>
          溫度: {Math.floor(v.main.temp)} ({v.main.temp_min}~{v.main.temp_max})℃
        </li>
        <li>濕度: {v.main.humidity} %</li>
        <li>陣風: {v.wind.speed} m/s</li>
        <li>{v.dt_txt}</li>
      </ul>
      <Divider/>
    </div>);
  });

  return (
    <div style={divStyle}>
      <Card>
        <CardHeader
          title={getCityNameById(selectedCity)}
          subtitle="天氣預報"
        />
        <CardActions>
          <FlatButton
            label="重新讀取"
            labelPosition="before"
            primary={true}
            icon={<ActionAutorenew />}
            onTouchTap={() => onGetForecastData(selectedCity)}
          />
        </CardActions>
        <CardText style={{padding: '5px'}}>
          {list}
        </CardText>
      </Card>
    </div>
  );
};

const AppWeather = ({
    weatherData,
    selectedCity,
    isFectingForecast,
    onGetForecastData,
  }) => {

    return (
      <div>
        {forecastState(weatherData,
          isFectingForecast, selectedCity, onGetForecastData)}
      </div>
    )
};

AppWeather.propTypes = {
  weatherData: PropTypes.object,
  selectedCity: PropTypes.string,
  isFectingForecast: PropTypes.bool.isRequired,
  onGetForecastData: PropTypes.func.isRequired
}

export default AppWeather;
