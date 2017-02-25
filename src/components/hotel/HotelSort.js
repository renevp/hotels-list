import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';

const HotelSort = ({hotels, query, sortFilters, onChange}) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <p> <b>{hotels.length}</b> hotels in <b>{query.location}.</b></p>
      </div>
      <form>
        <SelectInput
          name="sortId"
          label="Sort by"
          defaultOption="Top Deals"
          onChange={onChange}
          options={sortFilters}/>
      </form>
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
