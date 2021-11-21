import React, { useContext, useEffect } from 'react';
import Context from '../context';
import '../css/WorkedHours.css';

function Dolar() {
  const { 
    salarioLiquidoUSD, 
    enableResults, 
    salarioAnualUSD, 
    ganhoDiaUSD, 
    ganhoHoraUSD, 
    setGanhoHoraUSD,
    setGanhoDiaUSD,
    setSalarioLiquidoUSD,
    setSalarioAnualUSD,
    dinheiroHora, 
    dinheiroDia, 
    totalDinheiroMes, 
    totalDinheiroAno,
    currencies,    
  } = useContext(Context);

  useEffect(() => {
    const salaryInUSD = (hora, dia, mes, ano) => {
      let horaUSD = Math.round((hora / currencies) * 100) / 100;
      setGanhoHoraUSD(horaUSD);
      let diaUSD = Math.round((dia / currencies) * 100) / 100;
      setGanhoDiaUSD(diaUSD);
      let mesUSD = Math.round((mes / currencies) * 100) / 100;
      setSalarioLiquidoUSD(mesUSD);
      let anoUSD = Math.round((ano / currencies) * 100) / 100;
      setSalarioAnualUSD(anoUSD);
    };
    salaryInUSD(dinheiroHora, dinheiroDia, totalDinheiroMes, totalDinheiroAno);
  }, [currencies, dinheiroDia, dinheiroHora, setGanhoDiaUSD, setGanhoHoraUSD, setSalarioAnualUSD, setSalarioLiquidoUSD, totalDinheiroAno, totalDinheiroMes]);

  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="container-results-worked-hours">
        <h2>Quanto eu ganho em dólar? </h2>
        <h6>* Calculo baseado somente na remuneração em dinheiro</h6>
        <table>
          <tr>
            <th>Ganho liquido por hora trabalhado em USD:</th>
            <tb>{ganhoHoraUSD.toFixed(2)} $USD</tb>
          </tr>
          <tr>
          <th>Ganho liquido por dia trabalhado em USD: </th>
            <tb>{ganhoDiaUSD.toFixed(2)} $USD</tb>
          </tr>
          <tr>
            <th>Salário liquido por mês em USD: </th>
            <tb>{salarioLiquidoUSD.toFixed(2)} $USD</tb>
          </tr>
          <tr>
            <th>Salário liquido anual com 13 e 1/3 férias em USD: </th>
            <tb>{salarioAnualUSD.toFixed(2)} $USD</tb>
          </tr>
        </table>
      </section>
    );
  }
}

export default Dolar;