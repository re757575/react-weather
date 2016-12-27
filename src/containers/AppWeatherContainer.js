import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeatherData, getForecastData } from '../actions';
import AppWeather from '../components/AppWeather';

const mapDispatchToProps = (dispatch) => ({
    onGetCurrentWeatherData: (cityId) => {
      if (!cityId) return false;
      dispatch(getCurrentWeatherData(cityId));
    },
    onGetForecastData: (cityId) => {
      if (!cityId) return false;
      dispatch(getForecastData(cityId));
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
