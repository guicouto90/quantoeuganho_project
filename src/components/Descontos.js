import React, { useContext } from 'react';
import Context from '../context';
import '../css/Descontos.css';

function Descontos() {
  const 
  { 
    IRRF, 
    perIR, 
    INSS, 
    perINSS, 
    salarioLiquido,
    salarioBruto,
    descontos,
    enableResults,
  } = useContext(Context);
  
  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="descontos">
        <h4>Descontos salário bruto mensal:</h4>
        <table>
        <tr>
            <th>Salário Bruto:</th>
            <tb>{`R$${salarioBruto.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Desconto IRRF:</th>
            <tb>{IRRF === 'Isento' ? IRRF : `R$${IRRF.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Aliquota IRRF:</th>
            <tb>{perIR}</tb>
          </tr>
          <tr>
            <th>Desconto INSS: </th>
            <tb>{`R$${INSS.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Alíquota INSS:</th>
            <tb>{perINSS}</tb>
          </tr>
          <tr>
            <th>Total de descontos:</th>
            <tb>{`R$${ descontos.toFixed(2) }`}</tb>
          </tr>
          <tr>
            <th>Salário liquido: </th>
            <tb>{`R$${salarioLiquido.toFixed(2)}`}</tb>
          </tr>
        </table>
      </section>
    );
  }

  
}

export default Descontos;