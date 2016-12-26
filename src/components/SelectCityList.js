import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cityIdList from '../constants/cityIdList';

const options = cityIdList.map((v, k) =>
  <option key={k} value={Object.keys(v)}>{v[Object.keys(v)]}</option>
);

const SelectCityList = ({onSelectCity}) => (
  <div>
    <select onChange={onSelectCity}>{options}</select>
  </div>
);

SelectCityList.propTypes = {
  onSelectCity: PropTypes.func.isRequired
}

export default SelectCityList;
