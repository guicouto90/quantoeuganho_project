import React, { useContext } from 'react';
import Context from '../context';
import '../css/ResultsHours.css'

function ResultsHours() {
  const 
  { 
    ganhoDiaMes,
    ganhoDia,
    ganhoHora,
    enableResults,
    salarioAnual,
  } = useContext(Context);
  
  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="container-results-hours">
        <h2>Contabilização em tempo</h2>
        <table>
          <tr>
            <th>Ganho liquido por hora trabalhada:</th>
            <tb>{`R$${ganhoHora}`}</tb>
          </tr>
          <tr>
            <th>Ganho liquido por dia trabalhado:</th>
            <tb>{`R$${ganhoDia}`}</tb>
          </tr>
          <tr>
            <th>Salário liquido dividido por 30 dias no mês: </th>
            <tb>{`R$${ ganhoDiaMes }`}</tb>
          </tr>
          <tr>
            <th>Salário liquido anual com 13 e 1/3 férias:</th>
            <tb>{`R$${salarioAnual}`}</tb>
          </tr>
        </table>
      </section>
    );
  }

  
}

export default ResultsHours;