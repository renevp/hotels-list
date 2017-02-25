import React, {PropTypes} from 'react';

function pointsEarned(room){
  if (room.points_earned > 0) {
    return <div><p className="points-earned-title">Quantas points earned*</p><p className="points-earned">{room.points_earned}</p></div>;
  } else {
    return <p></p>;
  }
}

const PointsEarned = ({room}) => {
  return (
    <div className="col-md-2 points-earned">
      {pointsEarned(room)}
    </div>
  );
};

PointsEarned.propTypes = {
  room: PropTypes.object.isRequired
};

export default PointsEarned;
