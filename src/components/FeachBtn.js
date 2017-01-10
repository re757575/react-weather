import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/search';
import { getCurrentWeatherData, getForecastData } from '../actions';

export const FeachBtn = (props) => {
  const {
    style,
    selectedCity,
    onGetCurrentWeatherData,
    onGetForecastData
  } = props;

  const handleGetWeatherData = () => {
    onGetCurrentWeatherData(selectedCity);
    onGetForecastData(selectedCity);
  };

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
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  selectedCity: PropTypes.string,
  onGetCurrentWeatherData: PropTypes.func.isRequired,
  onGetForecastData: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onGetCurrentWeatherData: (cityId) => {
    if (cityId) {
      dispatch(getCurrentWeatherData(cityId));
    }
  },
  onGetForecastData: (cityId) => {
    if (cityId) {
      dispatch(getForecastData(cityId));
    }
  }
});

const mapStatsToProps = (state) => ({
  selectedCity: state.weather.selectedCity
});

export default connect(
    mapStatsToProps,
    mapDispatchToProps,
)(FeachBtn);
