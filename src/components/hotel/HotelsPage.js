import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import HotelList from './HotelList';

class HotelsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      hotels: Object.assign([], props.hotels)
    };

    this.sortList = this.sortList.bind(this);
  }

  sortList(event) {
    event.preventDefault();

    const sort = event.target.value;
    const {hotels} = this.props;

    let sortedHotels;
    switch (sort) {
      case 'name-asc':
        sortedHotels = _.orderBy(hotels, ['title'], ['asc']);
        break;
      case 'price-desc':
        sortedHotels = _.orderBy(hotels, ['rooms[0].price'], ['desc']);
        break;
      case 'price-asc':
        sortedHotels = _.orderBy(hotels, ['rooms[0].price'], ['asc']);
        break;
      case 'top-deals':
        sortedHotels = _.orderBy(hotels, ['rooms[0].savings'], ['asc']);
        break;
      default:
    }

    return this.setState({hotels: sortedHotels});
  }

  render() {
    const {hotels} = this.props;
    const {query} = this.props;
    const {sortFilters} = this.props;

    return (
      <div>
        <h1>Hotels</h1>
        <HotelList
          hotels={this.state.hotels}
          query={query}
          sortFilters={sortFilters}
          onChange={this.sortList}
        />
      </div>
    );
  }
}

HotelsPage.propTypes = {
  hotels: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  sortFilters: PropTypes.array.isRequired
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

  let sortFilters = [];
  if (state.hotels.sort_filters) {
    let sorts = state.hotels.sort_filters;
    Object.keys(sorts).forEach(key => {
      sortFilters.push({value: key, text: sorts[key]});
    });
  }

  return {
    hotels: hotels,
    query: query,
    sortFilters: sortFilters
  };
}

export default connect(mapStateToProps)(HotelsPage);
