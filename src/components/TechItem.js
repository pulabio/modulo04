import React from "react";

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

export default TechItem