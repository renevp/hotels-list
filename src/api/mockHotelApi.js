import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const data = require("json!./data.json");

class HotelApi {
  static searchHotels() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], data));
      }, delay);
    });
  }
}

export default HotelApi;
