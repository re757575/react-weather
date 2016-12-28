import { connect } from 'react-redux';
import { getForecastData } from '../actions';
import Forecast from '../components/Forecast';

const mapDispatchToProps = (dispatch) => ({
    onGetForecastData: (cityId) => {
      if (!cityId) return false;
      dispatch(getForecastData(cityId));
    }
});

const mapStatsToProps = (state) => {
  return {
    weatherData: state.weather.data,
    isFectingForecast: state.weather.isFectingForecast,
    selectedCity: state.weather.selectedCity     
  }
};

export default connect(
    mapStatsToProps,
    mapDispatchToProps,
)(Forecast);
