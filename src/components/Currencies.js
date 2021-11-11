import React, { useContext, useEffect } from 'react';
import Context from '../context';
import '../css/WorkedHours.css';

function Currencies() {
  const { 
    salarioLiquidoUSD, 
    enableResults, 
    salarioAnualUSD, 
    ganhoDiaMesUSD, 
    ganhoDiaUSD, 
    ganhoHoraUSD, 
    setGanhoHoraUSD,
    setGanhoDiaUSD,
    setSalarioLiquidoUSD,
    setSalarioAnualUSD,
    setGanhoDiaMesUSD,
    ganhoHora,
    ganhoDia,
    ganhoDiaMes,
    salarioLiquido,
    salarioAnual,
    currencies,
  } = useContext(Context);

  useEffect(() => {
    const salaryInUSD = (hora, dia, mes, ano, diaMes ) => {
      let horaUSD = Math.round((hora / currencies) * 100) / 100;
      setGanhoHoraUSD(horaUSD);
      let diaUSD = Math.round((dia / currencies) * 100) / 100;
      setGanhoDiaUSD(diaUSD);
      let mesUSD = Math.round((mes / currencies) * 100) / 100;
      setSalarioLiquidoUSD(mesUSD);
      let anoUSD = Math.round((ano / currencies) * 100) / 100;
      setSalarioAnualUSD(anoUSD);
      let diaMesUSD = Math.round((diaMes / currencies) * 100) / 100;
      setGanhoDiaMesUSD(diaMesUSD);
    };
    salaryInUSD(ganhoHora, ganhoDia, salarioLiquido, salarioAnual, ganhoDiaMes);
  }, []);

  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="container-results-worked-hours">
        <h2>Quanto eu ganho em dólar? </h2>
        <table>
          <tr>
            <th>Ganho liquido por hora trabalhado em USD:</th>
            <tb>{ganhoHoraUSD} $USD</tb>
          </tr>
          <tr>
          <th>Ganho liquido por dia trabalhado em USD: </th>
            <tb>{ganhoDiaUSD} $USD</tb>
          </tr>
          <tr>
            <th>Salário liquido por mês em USD: </th>
            <tb>{salarioLiquidoUSD} $USD</tb>
          </tr>
          <tr>
            <th>Salário liquido dividido por 30 dias no mês em USD:</th>
            <tb>{ganhoDiaMesUSD} $USD</tb>
          </tr>
          <tr>
            <th>Salário liquido anual com 13 e 1/3 férias em USD: </th>
            <tb>{salarioAnualUSD} $USD</tb>
          </tr>
        </table>
      </section>
    );
  }
}

export default Currencies;