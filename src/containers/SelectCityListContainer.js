import { connect } from 'react-redux';
import { selectCity } from '../actions';
import cityIdList from '../constants/cityIdList'
import SelectCityList from '../components/SelectCityList';

const mapDispatchToProps = (dispatch) => ({
    onSelectCity: (e) => {
      dispatch(selectCity(e.target.value));
    }
});

export default connect(
    null,
    mapDispatchToProps,
)(SelectCityList);
