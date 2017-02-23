import React, {PropTypes} from 'react';

const HotelSort = ({hotels}) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <p> <b>{hotels.length}</b> hotels in <b>Sydney.</b></p>
      </div>
      <div className="col-md-4" align="right">
        <div className="dropdown" >
          <label for="dropdownMenu1">Sort by</label>
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Top Deals
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Price (high-low)</a></li>
            <li><a href="#">Price (low-high)</a></li>
            <li><a href="#">Name (A-Z)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

HotelSort.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default HotelSort;
