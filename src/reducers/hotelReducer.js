import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function hotelReducer(state = initialState.hotels , action){
  switch (action.type) {
    case types.LIST_HOTELS_SUCCESS:
        return action.hotels;

    default:
      return state;
  }
}
