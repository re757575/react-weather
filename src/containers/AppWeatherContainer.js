import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from '../actions';
import AppWeather from '../components/AppWeather';

const mapDispatchToProps = (dispatch,aa) => ({
    onGetWeatherData: (cityId) => {
      if (!cityId) return false;
      dispatch(getWeatherData(cityId));
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
)(AppWeather);
