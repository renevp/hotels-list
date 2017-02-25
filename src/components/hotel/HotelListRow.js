import React, {PropTypes} from 'react';
import FreeCancellation from './FreeCancellation';
import PointsEarned from './PointsEarned';
import Price from './Price';

function formatTitle(title){
  if (title.length > 31) {
    return <h5 className="hotel-name">{title.substr(0, 31) + '...'}</h5>;
  } else {
    return <h5 className="hotel-name">{title}</h5>;
  }
}

const HotelListRow = ({hotel}) => {
  const room = hotel.rooms[0];
  return (
    <div className="row">
      <div className="col-md-3 hotel-image">
        <img src={hotel.image} />
        <span className="hotel-promotion">{hotel.promotion}</span>
      </div>
      <div className="col-md-5">
        {formatTitle(hotel.title)}
        <p className="hotel-address">{hotel.address}</p>
        <br/>
        <p className="room-name">{room.name}</p>
        <br/>
        <FreeCancellation room={room}/>
      </div>
      <PointsEarned room={room}/>
      <Price room={room}/>
    </div>
  );
};

HotelListRow.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default HotelListRow;
