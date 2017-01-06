export const cityIdList = [
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
    1668355: '台南'
  },
  {
    1673820: '高雄'
  }
];

export const getCityNameById = cityId => {
  if (!cityId) {
    return '';
  }

  const cityObj = cityIdList.filter((obj) => {
    if (Object.keys(obj).toString() === cityId.toString()) {
      return true;
    }
    return false;
  })[0];

  return cityObj[cityId] ? cityObj[cityId] : '';
};
