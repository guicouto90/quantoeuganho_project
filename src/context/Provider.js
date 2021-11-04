import React, { useState, useEffect } from 'react';
import Context from '.';
import fetchCurrencies from '../services/fetchCurrencies'

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
  const [hoursJapones, setHoursJapones] = useState(0);
  const [hoursIphone, setHoursIphone] = useState(0);
  const [hoursTanque, setHoursTanque] = useState(0);
  const [hoursCarro, setHoursCarro] = useState(0);
  const [hoursImovel, setHoursImovel] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [salarioAnualUSD, setSalarioAnualUSD] = useState(0);
  const [salarioLiquidoUSD, setSalarioLiquidoUSD] = useState(0);
  const [ganhoDiaMesUSD, setGanhoDiaMesUSD] = useState(0);
  const [ganhoDiaUSD, setGanhoDiaUSD] = useState(0);
  const [ganhoHoraUSD, setGanhoHoraUSD] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    const getCurrencies = async () => {
      const results = await fetchCurrencies();
      setCurrencies(results.USD.ask);
      setIsLoading(false);
    };
    getCurrencies();
  },[]);

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

    hoursJapones,
    hoursTanque, 
    hoursIphone,
    hoursCarro,
    hoursImovel,
    setHoursJapones,
    setHoursTanque,
    setHoursIphone,
    setHoursCarro,
    setHoursImovel,

    currencies,
    isLoading,

    salarioAnualUSD, 
    setSalarioAnualUSD,
    salarioLiquidoUSD, 
    setSalarioLiquidoUSD,
    ganhoDiaMesUSD, 
    setGanhoDiaMesUSD, 
    ganhoDiaUSD, 
    setGanhoDiaUSD, 
    ganhoHoraUSD, 
    setGanhoHoraUSD,
    setDisabledButton,
    disabledButton,
  };

  return(
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}



export default Provider;

