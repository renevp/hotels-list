import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';

const HotelSort = ({hotels, query, sortFilters, onChange}) => {
  return (
    <div className="row">
      <div className="col-xs-8">
        <p> <b>{hotels.length}</b> hotels in <b>{query.location}.</b></p>
      </div>
      <div className="col-xs-4">
        <SelectInput
          name="sortId"
          label="Sort by"
          defaultOption="Top Deals"
          onChange={onChange}
          options={sortFilters}/>
      </div>
    </div>
  );
};

HotelSort.propTypes = {
  hotels: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  sortFilters: PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default HotelSort;
