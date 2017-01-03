import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/search';
import { getCurrentWeatherData, getForecastData } from '../actions';

const style = {
  marginTop: '50px'
}

export const FeachBtn = ({
  selectedCity,
  onGetCurrentWeatherData,
  onGetForecastData }) => {

  const handleGetWeatherData = () => {
    onGetCurrentWeatherData(selectedCity);
    onGetForecastData(selectedCity);
  }

  return (
    <div>
      <RaisedButton
        disabled={!selectedCity}
        onTouchTap={handleGetWeatherData}
        label="查詢"
        style={style}
        icon={<ActionAndroid />}
      />
    </div>
  );
};

FeachBtn.propTypes = {
  selectedCity: PropTypes.string,
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
)(FeachBtn);
