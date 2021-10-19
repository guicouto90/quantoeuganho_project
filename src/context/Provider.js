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
  const [enableResults, setEnableResults] = useState(false);
  const [horas, setHoras] = useState(0);
  const [dias, setDias] = useState(0);
  const [ganhoHora, setGanhoHora] = useState(0);
  const [ganhoDia, setGanhoDia] = useState(0);
  const [ganhoDiaMes, setGanhoDiaMes] = useState(0);
  const [salarioAnual, setSalarioAnual] = useState(0);

  const context = {
    salarioBruto,
    setSalarioBruto,
    salarioLiquido,
    setSalarioLiquido,
    salarioAnual,
    setSalarioAnual,

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

    enableResults,
    setEnableResults,

    horas,
    setHoras,
    ganhoHora,
    setGanhoHora,

    dias,
    setDias,
    ganhoDia,
    setGanhoDia,
    ganhoDiaMes,
    setGanhoDiaMes,

  };

  return(
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}



export default Provider;

