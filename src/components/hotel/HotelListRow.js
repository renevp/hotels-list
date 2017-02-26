import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import FreeCancellation from './FreeCancellation';
import PointsEarned from './PointsEarned';
import Price from './Price';

const HotelListRow = ({hotel}) => {
  const room = hotel.rooms[0];
  const title = hotel.title;

  let formatTitle;
  if (title.length > 31) {
    formatTitle = <h5 className="hotel-name">{title.substr(0, 31) + '...'}</h5>;
  } else {
    formatTitle = <h5 className="hotel-name">{title}</h5>;
  }

  let ratingType;
  if (hotel.rating_type == 'star') {
    ratingType = () => <span className="glyphicon glyphicon-star" aria-hidden="true"></span>;
  } else if (hotel.rating_type == 'self'){
    ratingType = () => <span className="glyphicon glyphicon-one-fine-dot" aria-hidden="true"></span>;
  }

  return (
    <div className="row">
      <div className="col-xs-3 hotel-image">
        <img src={hotel.image} />
        <span className="hotel-promotion">{hotel.promotion}</span>
      </div>
      <div className="col-xs-9">
        <div className="row">
          <div className="col-xs-12">
            {formatTitle} &nbsp;&nbsp;
            <StarRatingComponent
                name="rating"
                editing={false}
                renderStarIcon={ratingType}
                starCount={5}
                value={hotel.rating}
            />
            <p className="hotel-address">{hotel.address}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <br/>
            <p className="room-name">{room.name}</p>
            <br/>
            <FreeCancellation room={room}/>
          </div>
          <PointsEarned room={room}/>
          <Price room={room}/>
        </div>
      </div>
    </div>
  );
};

HotelListRow.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default HotelListRow;
