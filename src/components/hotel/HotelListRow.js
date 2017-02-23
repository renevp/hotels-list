import React, {PropTypes} from 'react';
import FreeCancellation from './FreeCancellation';
import PointsEarned from './PointsEarned';
import Price from './Price';

function freeCancellation(hasFreeCancellation){
  if (hasFreeCancellation == "true") {
    return <FreeCancellation/>;
  } else {
    return <p></p>;
  }
}

function pointsEarned(room){
  if (room.points_earned > 0) {
    return <PointsEarned room={room}/>;
  } else {
    return <div className="col-md-2 points-earned"></div>;
  }
}

const HotelListRow = ({hotel}) => {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={hotel.image} alt=""/>
      </div>
      <div className="col-md-5">
        <h5 className="hotel-name">{hotel.title}</h5>
        <p className="hotel-address">{hotel.address}</p>
        <br/>
        <p className="room-name">{hotel.rooms[0].name}</p>
        <br/>
        {freeCancellation(hotel.rooms[0].free_cancellation)}
      </div>
      {pointsEarned(hotel.rooms[0])}
      <Price room={hotel.rooms[0]}/>
    </div>
  );
};

HotelListRow.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default HotelListRow;
