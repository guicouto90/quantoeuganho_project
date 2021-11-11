import React, { useState, useEffect } from 'react';
import Context from '.';
import fetchCurrencies from '../services/fetchCurrencies'

function Provider({ children }) {
  //Dinheiro
  const [salarioBruto, setSalarioBruto] = useState(0);
  const [salarioLiquido, setSalarioLiquido] = useState(0);
  const [salarioAnual, setSalarioAnual] = useState(0);
  const [plr, setPlr] = useState(0);

  //Impostos
  const [IRRF, setIRRF] = useState(0);
  const [perIR, setPerIR] = useState('0%');
  const [INSS, setINSS] = useState(0);
  const [perINSS, setPerINSS] = useState('0%');
  const [descontos, setDescontos] = useState(0);

  //Funcionalidades
  const [enableResults, setEnableResults] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  //Tempo
  const [horas, setHoras] = useState(0);
  const [dias, setDias] = useState(0);
  const [ganhoHora, setGanhoHora] = useState(0);
  const [ganhoDia, setGanhoDia] = useState(0);
  const [ganhoDiaMes, setGanhoDiaMes] = useState(0);
  const [hoursJapones, setHoursJapones] = useState(0);
  const [hoursIphone, setHoursIphone] = useState(0);
  const [hoursTanque, setHoursTanque] = useState(0);
  const [hoursCarro, setHoursCarro] = useState(0);
  const [hoursImovel, setHoursImovel] = useState(0);

  //Dolar
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [salarioAnualUSD, setSalarioAnualUSD] = useState(0);
  const [salarioLiquidoUSD, setSalarioLiquidoUSD] = useState(0);
  const [ganhoDiaMesUSD, setGanhoDiaMesUSD] = useState(0);
  const [ganhoDiaUSD, setGanhoDiaUSD] = useState(0);
  const [ganhoHoraUSD, setGanhoHoraUSD] = useState(0);

  // VALES
  const [valeAlimentacao, setValeAlimentacao] = useState(0);
  const [valeRefeicao, setValeRefeicao] = useState(0);
  const [valeCultura, setValeCultura] = useState(0);
  const [valeTransporte, setValeTransporte] = useState(0);

  //SAUDE
  const [convenioMedico, setConvenioMedico] = useState(0);
  const [convenioOdontologico, setConvenioOdontologico] = useState(0);
  const [seguroVida, setSeguroVida] = useState(0);
  const [academia, setAcademia] = useState(0);

  //OUTROS
  const [previdencia, setPrevidencia] = useState(0);
  const [carro, setCarro] = useState(0);
  const [educacao, setEducacao] = useState(0);
  const [creche, setCreche] = useState(0);

  //TOTAL DE TUDO
  const [totalBeneficiosMes, setTotalBeneficiosMes] = useState(0);
  const [totalBeneficiosAno, setTotalBeneficiosAno] = useState(0);
  const [totalDinheiroMes, setTotalDinheiroMes] = useState(0);
  const [totalDinheiroAno, setTotalDinheiroAno] = useState(0);
  const [totalGanhosMes, setTotalGanhosMes] = useState(0);
  const [totalGanhosAno, setTotalGanhosAno] = useState(0);
  const [dinheiroHora, setDinheiroHora] = useState(0);
  const [dinheiroDia, setDinheiroDia] = useState(0);
  const [totalHora, setTotalHora] = useState(0);
  const [totalDia, setTotalDia] = useState(0);


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
    plr,
    setPlr,

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

    valeAlimentacao,
    valeCultura,
    valeRefeicao,
    valeTransporte,
    setValeAlimentacao,
    setValeCultura,
    setValeRefeicao,
    setValeTransporte,

    convenioMedico,
    convenioOdontologico,
    seguroVida,
    academia,
    setConvenioMedico,
    setConvenioOdontologico,
    setSeguroVida,
    setAcademia,

    previdencia,
    carro,
    educacao,
    creche,
    setPrevidencia,
    setCarro,
    setEducacao,
    setCreche,

    totalBeneficiosMes,
    totalBeneficiosAno,
    totalDinheiroMes,
    totalDinheiroAno,
    totalGanhosMes,
    totalGanhosAno,
    setTotalBeneficiosMes,
    setTotalBeneficiosAno,
    setTotalDinheiroMes,
    setTotalDinheiroAno,
    setTotalGanhosMes,
    setTotalGanhosAno,

    dinheiroHora,
    setDinheiroHora,
    dinheiroDia,
    setDinheiroDia,
    totalHora,
    setTotalHora,
    totalDia,
    setTotalDia,
  };

  return(
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}



export default Provider;

