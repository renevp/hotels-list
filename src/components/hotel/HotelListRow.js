import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const HotelListRow = ({hotel}) => {
  return (
    <tr>
      <td><a href={hotel.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/hotel/' + hotel.id}>{hotel.title}</Link></td>
      <td>{hotel.authorId}</td>
      <td>{hotel.category}</td>
      <td>{hotel.length}</td>
    </tr>
  );
};

HotelListRow.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default HotelListRow;
