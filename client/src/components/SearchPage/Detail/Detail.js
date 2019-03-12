import React from 'react';
import { PropTypes } from 'prop-types';

export const Detail = ({ idx, item, onEdit, onDelete }) => {
  const { created, updated, name, forks, stars, size, url, desc, language } = item;
  return (
      <tr>
          <td>{idx + 1}</td>
          <td>{name}</td>
          <td>{url}</td>
          <td>{language}</td>
          <td>{desc}</td>
          <td>{stars}</td>
          <td>{forks}</td>
          <td>{size}</td>
          <td>{created}</td>
          <td>{updated}</td>
      </tr>
  );
};
Detail.propTypes = {
  idx: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default Detail;
