import React, {PropTypes} from 'react';
import HotelSort from './HotelSort';
import HotelListRow from './HotelListRow';

const HotelList = ({hotels, query, sortFilters, onChange}) => {
  return (
    <div className="col-md-12">
      <HotelSort
        hotels={hotels}
        query={query}
        sortFilters={sortFilters}
        onChange={onChange}
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
  sortFilters: PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default HotelList;
