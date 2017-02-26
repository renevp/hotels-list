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

    this.changeSort = this.changeSort.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({hotels: Object.assign([], nextProps.hotels)});
  }

  sortList(sort, hotels){
    switch (sort) {
      case 'name-asc':
        return _.orderBy(hotels, ['title'], ['asc']);
      case 'price-desc':
        return _.orderBy(hotels, ['rooms[0].price'], ['desc']);
      case 'price-asc':
        return _.orderBy(hotels, ['rooms[0].price'], ['asc']);
      case 'top-deals':
        return _.orderBy(hotels, ['rooms[0].savings'], ['asc']);
      default:
        return hotels;
    }
  }

  changeSort(event) {
    const sort = event.target.value;
    const {hotels} = this.props;

    return this.setState({hotels: this.sortList(sort, hotels)});
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
          onChange={this.changeSort}
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

function getHotels(state){
  if (state.hotels.hotels) {
    return state.hotels.hotels;
  }else {
    return [];
  }
}

function getQuery(state){
  if (state.hotels.query) {
    return state.hotels.query;
  }else {
    return {};
  }
}

function getSortFilters(state){
  let sortFilters = [];
  if (state.hotels.sort_filters) {
    let sorts = state.hotels.sort_filters;
    Object.keys(sorts).forEach(key => {
      sortFilters.push({value: key, text: sorts[key]});
    });
  }

  return sortFilters;
}

function mapStateToProps(state, ownProps) {
  return {
    hotels: getHotels(state),
    query: getQuery(state),
    sortFilters: getSortFilters(state)
  };
}

export default connect(mapStateToProps)(HotelsPage);
