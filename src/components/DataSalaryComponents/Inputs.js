import React from 'react';

function Inputs({ title, id, type, onChange, placeholder, maxLength }) {

  return(
    <label htmlFor={ id }>
      { title }
      <input 
        type={ type }
        id={ id }
        placeholder={ placeholder }
        onChange={ onChange }
        maxLength={ maxLength }
      />
    </label>
  );
};

export default Inputs;