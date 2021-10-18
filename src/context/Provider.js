import React, { useState } from 'react';
import Context from '.';

function Provider({ children }) {
  const [salarioBruto, setSalarioBruto] = useState(0);
  const [salarioLiquido, setSalarioLiquido] = useState(0);
  const [IRRF, setIRRF] = useState(0);
  const [perIR, setPerIR] = useState('0%');
  const [INSS, setINSS] = useState(0);
  const [perINSS, setPerINSS] = useState('0%');
  const [descontos, setDescontos] = useState(0); 

  const context = {

    salarioBruto,
    setSalarioBruto,
    salarioLiquido,
    setSalarioLiquido,

    IRRF, 
    setIRRF,
    perIR,
    setPerIR,

    INSS,
    setINSS,
    perINSS,
    setPerINSS,

    descontos,
    setDescontos,

  };

  return(
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}



export default Provider;

