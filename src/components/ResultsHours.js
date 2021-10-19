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
        <div>
          <span>Ganho liquido por hora trabalhada: {`R$${ganhoHora}`}</span>
        </div>
        <div>
          <span>Ganho liquido por dia trabalhado: {`R$${ganhoDia}`}</span>
        </div>
        <div>
          <span>Salário liquido dividido por 30 dias no mês: {`R$${ ganhoDiaMes }`}</span>
        </div>
        <div>
          <span>Salário liquido anual com 13 e 1/3 férias: {`R$${salarioAnual}`}</span>
        </div>
      </section>
    );
  }

  
}

export default ResultsHours;