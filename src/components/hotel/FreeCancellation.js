import React, {PropTypes} from 'react';

function freeCancellation(room){
  if (room.free_cancellation == "true") {
    return <div><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>Free cancellation</div>;
  }
}

const FreeCancellation = ({room}) => {
  return (
    <p className="free-cancellation">
      {freeCancellation(room)}
    </p>
  );
};

FreeCancellation.propTypes = {
  room: PropTypes.object.isRequired
};

export default FreeCancellation;
