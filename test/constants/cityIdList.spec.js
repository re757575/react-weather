import { expect } from 'chai';
import { cityIdList, getCityNameById } from '../../src/constants/cityIdList';

describe('constants cityIdList testing', () => {
  it('should cityIdList is array object', () => {
    expect(cityIdList).to.be.array;

    cityIdList.forEach(obj => {
      expect(obj).to.be.object;
    });
  });

  it('should get city name by getCityNameById()', () => {
    for (let i = 0; i < cityIdList.length; i += 1) {
      Object.keys(cityIdList[i]).forEach((key) => {
        if (key) {
          expect(getCityNameById(key)).to.be.equal(cityIdList[i][key]);
        } else {
          expect(getCityNameById(key)).to.be.empty;
        }
      });
    }
  });
});
