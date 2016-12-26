import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

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

    const cityIdList = [
      {
        '': '請選擇'
      },
      {
        1668341: '台北'
      },
      {
        6696918: '桃園'
      },
      {
        1668399: '台中'
      },
      {
        1668355 : '台南'
      },
      {
        1673820: '高雄'
      }
    ];

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
