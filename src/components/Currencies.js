import React, { useContext } from 'react';
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

   } = useContext(Context);

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