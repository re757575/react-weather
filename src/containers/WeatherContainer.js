import { connect } from 'react-redux';
import { getCurrentWeatherData } from '../actions';
import Weather from '../components/Weather';

const mapDispatchToProps = (dispatch) => ({
    onGetCurrentWeatherData: (cityId) => {
      if (!cityId) return false;
      dispatch(getCurrentWeatherData(cityId));
    }
});

const mapStatsToProps = (state) => {
  return {
    weatherData: state.weather.data,
    isFectingWeather: state.weather.isFectingWeather,
    selectedCity: state.weather.selectedCity     
  }
};

export default connect(
    mapStatsToProps,
    mapDispatchToProps,
)(Weather);
