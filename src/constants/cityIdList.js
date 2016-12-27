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

export default cityIdList;

export const getCityNameById = cityId => {

  if (!cityId) {
    return '';
  }

  var obj = cityIdList.filter(function ( obj ) {
      if (Object.keys(obj).toString() === cityId.toString()) {
        return true;
      }
  })[0];

  return obj[cityId] ? obj[cityId] : '';
};
