import React, {PropTypes} from 'react';
import HotelListRow from './HotelListRow';

const HotelList = ({hotels}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Address</th>
        <th>Image</th>
        <th>Rating</th>
      </tr>
      </thead>
      <tbody>
      {hotels.map(hotel =>
        <HotelListRow key={hotel.id} hotel={hotel}/>
      )}
      </tbody>
    </table>
  );
};

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default HotelList;
