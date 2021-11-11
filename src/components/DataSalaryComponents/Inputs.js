import React from 'react';

function Inputs({ title, id, type, placeholder, maxLength, required, setValue }) {

  const handleOnChange = ({ target: { value } } ) => {
    setValue(Number(value))
  }

  return(
    <label htmlFor={ id }>
      { title }
      <input 
        type={ type }
        id={ id }
        placeholder={ placeholder }
        onChange={ handleOnChange }
        maxLength={ maxLength }
        required={ required }
      />
    </label>
  );
};

export default Inputs;