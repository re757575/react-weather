import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {

    console.log('constructor()');

    super(props);

    this.state = {
      appTitle: 'React Weather',
      selectedCity: null,
      weatherData: null,
      loadStatus: 'not load'
    };

    this.getWeatherData = this.getWeatherData.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  getWeatherData() {

    console.log('getWeatherData()');

    if (!this.state.selectedCity) {
      return false;
    }

    const APPID = '3a494cb65411295b23e82358cf4f07f6';
    let url = `http://api.openweathermap.org/data/2.5/weather?id=${this.state.selectedCity}&APPID=${APPID}`;

    this.setState({loadStatus: 'loading...'});

    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({weatherData: json, loadStatus: 'loaded'}))
      .catch(ex => console.log('parsing failed', ex) );
  };

  changeCity(e) {
    console.log('changeCity()');
    this.setState({selectedCity: e.target.value});
  }

  render() {

    console.log('render()');

    const style = {color: 'red'};

    const data = this.state.weatherData;

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

        <select onChange={this.changeCity}>
          {options}
        </select>

        <button onClick={this.getWeatherData}>get weather</button>

        <div style={style}>
          {this.state.loadStatus}
        </div>

        <div>
          { JSON.stringify(data, null, 2) }
        </div>

      </div>
    );
  }
}
