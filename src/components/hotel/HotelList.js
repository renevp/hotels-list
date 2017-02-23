import React, {PropTypes} from 'react';
import HotelSort from './HotelSort';
import HotelListRow from './HotelListRow';

const HotelList = ({hotels}) => {
  return (
    <div className="col-md-12">
      <HotelSort hotels={hotels}/>
      {hotels.map(hotel =>
        <HotelListRow key={hotel.id} hotel={hotel}/>
      )}
    </div>
  );
};

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default HotelList;
