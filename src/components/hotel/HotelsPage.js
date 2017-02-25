import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import HotelList from './HotelList';

class HotelsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {hotels} = this.props;
    const {query} = this.props;
    const {sortFilters} = this.props;

    return (
      <div>
        <h1>Hotels</h1>
        <HotelList
          hotels={hotels}
          query={query}
          sortFilters={sortFilters}
        />
      </div>
    );
  }
}

HotelsPage.propTypes = {
  hotels: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  sortFilters: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let hotels = [];
  if (state.hotels.hotels) {
    hotels = state.hotels.hotels;
  }

  let query = {};
  if (state.hotels.query) {
    query = state.hotels.query;
  }

  let sortFilters = {};
  if (state.hotels.sort_filters) {
    sortFilters = state.hotels.sort_filters;
  }

  console.log(hotels);
  console.log(query);
  console.log(sortFilters);
  return {
    hotels: hotels,
    query: query,
    sortFilters: sortFilters
  };
}

export default connect(mapStateToProps)(HotelsPage);
