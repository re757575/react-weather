import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeatherData, getForecastData } from '../actions';

// TODO: ReloadDataLink 必須改寫 使用 props 傳遞參數, 不透過 store
const ReloadDataLink = ({
  reloadType,
  selectedCity,
  onGetCurrentWeatherData,
  onGetForecastData }) => {

  let reloadLinkStyle = {
    color: !selectedCity ? 'gray' : '',
    textDecoration: 'none'
  }

  const handleReloadData = () => {
    if (reloadType === 'weather') {
      onGetCurrentWeatherData(selectedCity);
    }
    if (reloadType === 'forecast') {
      onGetForecastData(selectedCity);
    }
  }

  return (
    <div>
      <a href="javascript:void(0)"
         style={reloadLinkStyle}
         onClick={handleReloadData}>重新讀取</a>
    </div>
  );
};

ReloadDataLink.propTypes = {
  reloadType: PropTypes.string.isRequired,
  selectedCity: PropTypes.string.isRequired,
  onGetCurrentWeatherData: PropTypes.func.isRequired ,
  onGetForecastData: PropTypes.func.isRequired 
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
)(ReloadDataLink);
