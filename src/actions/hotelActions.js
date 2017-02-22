import * as types from './actionTypes';
import hotelApi from '../api/mockHotelApi';

export function loadHotelsSuccess(hotels) {
  return {type: types.LOAD_HOTELS_SUCCESS, hotels};
}

export function loadHotels() {
  return function(dispatch) {
    return hotelApi.getAllHotels().then(hotels => {
      dispatch(loadHotelsSuccess(hotels));
    }).catch(error => {
      throw(error);
    });
  };
}
