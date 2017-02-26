import React, {PropTypes} from 'react';

const PointsEarned = ({room}) => {
  let pointsEarned;
  if (room.points_earned > 0) {
    pointsEarned = <div><p className="points-earned-title">Quantas points earned*</p><p className="points-earned">{room.points_earned}</p></div>;
  } else {
    pointsEarned = <p></p>;
  }

  return (
    <div className="col-xs-3 points-earned">
      {pointsEarned}
    </div>
  );
};

PointsEarned.propTypes = {
  room: PropTypes.object.isRequired
};

export default PointsEarned;
