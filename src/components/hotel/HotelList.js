import React, {PropTypes} from 'react';
import HotelSort from './HotelSort';
import HotelListRow from './HotelListRow';

const HotelList = ({hotels, query, sortFilters}) => {
  return (
    <div className="col-md-12">
      <HotelSort
        hotels={hotels}
        query={query}
        sortFilters={sortFilters}
      />
      {hotels.map(hotel =>
        <HotelListRow key={hotel.id} hotel={hotel}/>
      )}
    </div>
  );
};

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  sortFilters: PropTypes.object.isRequired
};

export default HotelList;
