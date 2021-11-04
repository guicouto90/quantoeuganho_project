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
        <table>
          <tr>
            <th>Desconto IRRF:</th>
            <tb>{IRRF === 'Isento' ? IRRF : `R$${IRRF}`}</tb>
          </tr>
          <tr>
            <th>Aliquota IRRF:</th>
            <tb>{perIR}</tb>
          </tr>
          <tr>
            <th>Desconto INSS: </th>
            <tb>{`R$${INSS}`}</tb>
          </tr>
          <tr>
            <th>Alíquota INSS:</th>
            <tb>{perINSS}</tb>
          </tr>
          <tr>
            <th>Total de descontos:</th>
            <tb>{`R$${ descontos }`}</tb>
          </tr>
          <tr>
            <th>Salário liquido por mês: </th>
            <tb>{`R$${salarioLiquido}`}</tb>
          </tr>
        </table>
      </section>
    );
  }

  
}

export default ResultsDiscounts;