import React, { useContext } from 'react';
import Context from '../../context';

function SalarioLiquido() {
  const { 
    ganhoHora,
    ganhoDia,
    ganhoDiaMes,
    salarioLiquido,
    salarioAno12,
  } = useContext(Context);
  
  return(
    <section>
      <h5>SOMENTE o salário líquido</h5>
      <table>
        <tr>
          <th>Ganho liquido por hora trabalhada:</th>
          <tb>{`R$${ganhoHora} por hora`}</tb>
        </tr>
        <tr>
          <th>Ganho liquido por dia trabalhado</th>
          <tb>{`R$${ganhoDia} por dia`}</tb>
        </tr>
        <tr>
          <th>Salário liquido mensal dividido por 30 dias no mês</th>
          <tb>{`R$${ ganhoDiaMes } por dia`}</tb>
        </tr>
        <tr>
          <th>Salário Liquido mensal SEM 13 e 1/3 de férias: </th>
          <tb>{`R$${ salarioLiquido } por mês`}</tb>
        </tr>
        <tr>
          <th>Salário Anual SEM 13 e 1/3 de férias: </th>
          <tb>{`R$${ salarioAno12 } por ano`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default SalarioLiquido;