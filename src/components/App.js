import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from '../actions';

class App extends Component {

  constructor(props) {

    console.log('constructor()');

    super(props);

    this.state = {
      appTitle: 'React Weather',
      selectedCity: null
    };

    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);
  }

  handleChangeCity(e) {
    console.log('handleChangeCity()');
    const selectedCity = e.target.value;
    this.setState({selectedCity});
  }

  handleGetWeather() {
    console.log('handleGetWeather()');
    this.props.getWeatherData(this.state.selectedCity);
  }

  render() {

    console.log('render()');

    const style = {color: 'red'};

    const { weatherData, isFecting } = this.props;

    const cityIdList = [
      {
        '': '請選擇'
      },
      {
        1668341: '台北'
      },
      {
        6696918: '桃園'
      },
      {
        1668399: '台中'
      },
      {
        1668355 : '台南'
      },
      {
        1673820: '高雄'
      }
    ];

    const options = cityIdList.map((v, k) =>
      <option key={k} value={Object.keys(v)}>{v[Object.keys(v)]}</option>
    );

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

        <select onChange={this.handleChangeCity}>{options}</select>

        <span><button disabled={!this.state.selectedCity} onClick={this.handleGetWeather}>get weather</button></span>

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
    isFecting: state.weather.isFecting
  }
};

export default connect(
    mapStatsToProps,
    mapDispatchToProps,
)(App);
