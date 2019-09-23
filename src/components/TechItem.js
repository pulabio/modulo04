import React from "react";

import PropTypes from 'prop-types';

function TechItem({ tech, handleDelete }){
  return(
    <li key={tech}>
      {tech}
    <button type="button" onClick={() => handleDelete(tech)} > Remover </button>
  </li>
  )
}

TechItem.defaultProps = {
  tech: 'Tech not informed',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
}

export default TechItem