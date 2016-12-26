import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from '../actions';
import SelectCityList from '../containers/SelectCityListContainer';

class App extends Component {

  constructor(props) {

    console.log('constructor App');

    super(props);

    this.state = {
      appTitle: 'React Weather'
    };

    this.handleGetWeather = this.handleGetWeather.bind(this);
  }

  handleGetWeather() {
    this.props.getWeatherData(this.props.selectedCity);
    console.log('handleGetWeather()');
  }

  render() {

    console.log('render App');

    const style = {color: 'red'};

    const { weatherData, isFecting, selectedCity } = this.props;

    const cityWeatherState = () => {

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
          <li>溫度: {Math.floor(weatherData.main.temp - 273.15)} ℃</li>
          <li>濕度: {weatherData.main.humidity} %</li>
        </ul>
      </div>);
    }

    return (

      <div>
        <h1>{this.state.appTitle}</h1>
        <SelectCityList/>

        <span><button disabled={!selectedCity} onClick={this.handleGetWeather}>get weather</button></span>

        {cityWeatherState()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    getWeatherData: (cityId) => {
      dispatch(getWeatherData(cityId))
    }
});

const mapStatsToProps = (state) => {
  return {
    weatherData: state.weather.data,
    isFecting: state.weather.isFecting,
    selectedCity: state.weather.selectedCity     
  }
};

export default connect(
    mapStatsToProps,
    mapDispatchToProps,
)(App);
