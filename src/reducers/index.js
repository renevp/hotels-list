import {combineReducers} from 'redux';
import hotels from './hotelReducer';

const rootReducer = combineReducers({
  hotels
});

export default rootReducer;
