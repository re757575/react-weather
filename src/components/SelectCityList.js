import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { cityIdList } from '../constants/cityIdList';

const style = {
  float: 'left',
  marginRight: '30px',
  marginTop: '20px',
  width: 200,
};

const options = cityIdList.map((v, k) =>
  <MenuItem key={k} value={Object.keys(v).toString()} primaryText={v[Object.keys(v)]} />
);

const SelectCityList = ({ selectedCity, onSelectCity }) => (
  <div>
    <SelectField
      floatingLabelText="City"
      value={selectedCity}
      onChange={onSelectCity}
      style={style}
    >
      {options}
    </SelectField>
  </div>
);

SelectCityList.propTypes = {
  selectedCity: PropTypes.string,
  onSelectCity: PropTypes.func.isRequired
};

export default SelectCityList;
