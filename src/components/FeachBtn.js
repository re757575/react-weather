import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeatherData, getForecastData } from '../actions';

const FeachBtn = ({
  selectedCity,
  onGetCurrentWeatherData,
  onGetForecastData }) => {

  const handleGetWeatherData = () => {
    onGetCurrentWeatherData(selectedCity);
    onGetForecastData(selectedCity);
  }

  return (
    <div>
      <button disabled={!selectedCity} onClick={handleGetWeatherData}>查詢</button> 
    </div>
  );
};

FeachBtn.propTypes = {
  selectedCity: PropTypes.string,
  onGetCurrentWeatherData: PropTypes.func.isRequire ,
  onGetForecastData: PropTypes.func.isRequire
};

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
    selectedCity: state.weather.selectedCity     
  }
};

export default connect(
    mapStatsToProps,
    mapDispatchToProps,
)(FeachBtn);
