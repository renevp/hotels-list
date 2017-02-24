import * as types from './actionTypes';
import hotelApi from '../api/mockHotelApi';

export function findHotelsSuccess(hotels) {
  return {type: types.FIND_HOTELS_SUCCESS, hotels};
}

export function findHotels() {
  return function(dispatch) {
    return hotelApi.searchHotels().then(hotels => {
      dispatch(findHotelsSuccess(hotels));
    }).catch(error => {
      throw(error);
    });
  };
}
