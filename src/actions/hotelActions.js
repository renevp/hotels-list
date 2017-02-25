import * as types from './actionTypes';
import hotelApi from '../api/mockHotelApi';

export function listHotelsSuccess(hotels) {
  return {type: types.LIST_HOTELS_SUCCESS, hotels};
}

export function listHotels() {
  return function(dispatch) {
    return hotelApi.searchHotels().then(hotels => {
      dispatch(listHotelsSuccess(hotels));
    }).catch(error => {
      throw(error);
    });
  };
}
