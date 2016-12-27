import { connect } from 'react-redux';
import { selectCity, getCurrentWeatherData, getForecastData } from '../actions';
import cityIdList from '../constants/cityIdList'
import SelectCityList from '../components/SelectCityList';

const mapDispatchToProps = (dispatch) => ({
    onSelectCity: (e) => {
      const cityId = e.target.value;
      dispatch(selectCity(cityId));
      
      if (cityId) {
        dispatch(getCurrentWeatherData(cityId));
        dispatch(getForecastData(cityId));
      }
    }
});

export default connect(
    null,
    mapDispatchToProps,
)(SelectCityList);
