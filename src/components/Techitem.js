import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return(
  <li key = {tech}>
    { tech }
    <button onClick = {onDelete} type = "button">Excluir</button>
  </li>
)}

TechItem.defaultProps = {
  tech: 'nulo',
};

TechItem.prototypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;