import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import HotelList from './HotelList';

class HotelsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {hotels} = this.props;

    return (
      <div>
        <h1>Hotels</h1>
        <HotelList hotels={hotels}/>
      </div>
    );
  }
}

HotelsPage.propTypes = {
  hotels: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    hotels: state.hotels
  };
}

export default connect(mapStateToProps)(HotelsPage);
