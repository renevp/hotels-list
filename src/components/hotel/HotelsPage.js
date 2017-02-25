import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../actions/hotelActions';
import HotelList from './HotelList';

class HotelsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.sortList = this.sortList.bind(this);
  }

  sortList(event) {
    // const field = event.target.name;
    // let course = this.state.course;
    // course[field] = event.target.value;
    // return this.setState({course: course});

    this.props.actions.listHotels()
      // .then(() => this.redirect())
      .catch(error => {
        // toastr.error(error);
        // this.setState({saving: false});
      });
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

  console.log(hotels);
  console.log(query);
  console.log(sortFilters);
  return {
    hotels: hotels,
    query: query,
    sortFilters: sortFilters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(hotelActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsPage);
