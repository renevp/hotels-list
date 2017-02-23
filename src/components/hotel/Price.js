import React, {PropTypes} from 'react';

const Price = ({room}) => {
  let savings;
  if (room.savings != 0) {
    savings = <p className="savings">Save {room.savings}</p>;
  } else {
    savings = <p></p>;
  }

  return (
    <div className="col-md-2 price">
      <p className="total-nights"> <b>1</b> night total (AUD)</p>
      <p className="price"><span className="price"></span>{room.price}</p>
      {savings}
    </div>
  );
};

Price.propTypes = {
  room: PropTypes.object.isRequired
};

export default Price;
