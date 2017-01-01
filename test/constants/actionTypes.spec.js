import { expect } from 'chai';
import * as types from '../../src/constants/actionTypes';

describe('constants actionTypes testing', () => {
  it('should have REQUEST_WEATHER action', () => {
    expect(types).to.have.property('REQUEST_WEATHER');
  });
  it('should have REQUEST_FORECAST action', () => {
    expect(types).to.have.property('REQUEST_FORECAST');
  });
  it('should have FETCH_WEATHER action', () => {
    expect(types).to.have.property('FETCH_WEATHER');
  });
  it('should have FETCH_FORECAST action', () => {
    expect(types).to.have.property('FETCH_FORECAST');
  });
  it('should have SELECT_CITY action', () => {
    expect(types).to.have.property('SELECT_CITY');
  });
});
