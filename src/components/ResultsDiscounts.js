import React, { useContext } from 'react';
import Context from '../context';
import '../css/ResultsDiscounts.css';

function ResultsDiscounts() {
  const 
  { 
    IRRF, 
    perIR, 
    INSS, 
    perINSS, 
    salarioLiquido,
    descontos,
    enableResults,
  } = useContext(Context);
  
  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="container-results-discounts">
        <h2>Descontos</h2>
        <div>
          <span>Desconto IRRF: {IRRF === 'Isento' ? IRRF : `R$${IRRF}`}</span>
        </div>
        <div>
          <span>Aliquota IRRF: {perIR}</span>
        </div>
        <div>
          <span>Desconto INSS: R${INSS}</span>
        </div>
        <div>
          <span>Alíquota INSS: {perINSS}</span>
        </div>
        <div>
          <span>Total de descontos: {`R$${ descontos }`}</span>
        </div>
        <div>
          <span>Salário liquido por mês: {`R$${salarioLiquido}`}</span>
        </div>
      </section>
    );
  }

  
}

export default ResultsDiscounts;