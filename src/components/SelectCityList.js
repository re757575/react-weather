import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { cityIdList } from '../constants/cityIdList';

const options = cityIdList.map((v, k) =>
  <MenuItem key={k} value={Object.keys(v).toString()} primaryText={v[Object.keys(v)]} />
);

const SelectCityList = (props) => {
  const {
    style,
    selectedCity,
    onSelectCity,
  } = props;

  return (
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
};

SelectCityList.propTypes = {
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  selectedCity: PropTypes.string,
  onSelectCity: PropTypes.func.isRequired
};

export default SelectCityList;
