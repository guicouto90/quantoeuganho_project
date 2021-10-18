import React, { useContext } from 'react';
import Context from '../context';

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
          <span>Salário líquido: {`R$${salarioLiquido}`}</span>
        </div>
      </section>
    );
  }

  
}

export default ResultsDiscounts;