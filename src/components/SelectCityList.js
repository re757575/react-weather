import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions';
import cityIdList from '../constants/cityIdList';

class SelectCityList extends Component {

  constructor(props) {

    console.log('constructor SelectCityList');

    super(props);

    this.handleChangeCity = this.handleChangeCity.bind(this);
  }

  handleChangeCity(e) {
    const selectedCity = e.target.value;
    this.props.selectCity(selectedCity);
    console.log('handleChangeCity()', selectedCity);
  }

  render() {

    console.log('render SelectCityList');

    const options = cityIdList.map((v, k) =>
      <option key={k} value={Object.keys(v)}>{v[Object.keys(v)]}</option>
    );

    return (
      <div>
        <select onChange={this.handleChangeCity}>{options}</select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    selectCity: (cityId) => {
      dispatch(selectCity(cityId))
    }
});

export default connect(
    null,
    mapDispatchToProps,
)(SelectCityList);
