import React, {PropTypes} from 'react';

const PointsEarned = ({room}) => {
  return (
    <div className="col-md-2 points-earned">
      <p className="points-earned-title">Quantas points earned*</p>
      <p className="points-earned">{room.points_earned}</p>
    </div>
  );
};

PointsEarned.propTypes = {
  room: PropTypes.object.isRequired
};

export default PointsEarned;
