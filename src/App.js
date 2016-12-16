import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './actions';
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
        1668399: '台中'
      }
    ];

    const options = cityIdList.map((v, k) =>
      <option key={k} value={Object.keys(v)}>{Object.values(v)}</option>
    );

    return (

      <div>
        <h1>{this.state.appTitle}</h1>

        <select onChange={this.handleChangeCity}>
          {options}
        </select>

        <button onClick={this.handleGetWeather}>get weather</button>

        <div style={style}>
          {isFecting +''}
        </div>

        <div>
          { JSON.stringify(weatherData, null, 2) }
        </div>

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
