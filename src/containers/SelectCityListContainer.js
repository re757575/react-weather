import { connect } from 'react-redux';
import { selectCity, getCurrentWeatherData, getForecastData } from '../actions';
import SelectCityList from '../components/SelectCityList';

const mapDispatchToProps = (dispatch) => ({
  onSelectCity: (e, key, playload) => {
    const cityId = playload.toString();
    dispatch(selectCity(cityId));

    if (cityId) {
      dispatch(getCurrentWeatherData(cityId));
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
)(SelectCityList);
