import React, {PropTypes} from 'react';

const FreeCancellation = ({room}) => {
  let freeCancellation;
  if (room.free_cancellation == "true") {
    freeCancellation = <span><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>Free cancellation</span>;
  }

  return (
    <p className="free-cancellation">
      {freeCancellation}
    </p>
  );
};

FreeCancellation.propTypes = {
  room: PropTypes.object.isRequired
};

export default FreeCancellation;
