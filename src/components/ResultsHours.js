import React, { useContext } from 'react';
import Context from '../context';

function ResultsHours() {
  const 
  { 
    ganhoDia,
    ganhoHora,
    enableResults,
  } = useContext(Context);
  
  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="container-results-hours">
        <div>
          <span>Ganho liquido por hora trabalhada: {`R$${ganhoHora}`}</span>
        </div>
        <div>
          <span>Ganho liquido por dia trabalhado: {`R$${ganhoDia}`}</span>
        </div>
      </section>
    );
  }

  
}

export default ResultsHours;