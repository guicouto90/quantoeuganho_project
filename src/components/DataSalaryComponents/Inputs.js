import React from 'react';

function Inputs({ title, id, type, onChange, placeholder }) {

  return(
    <label htmlFor={ id }>
      { title }
      <input 
        type={ type }
        id={ id }
        placeholder={ placeholder }
        onChange={ onChange }
      />
    </label>
  );
};

export default Inputs;