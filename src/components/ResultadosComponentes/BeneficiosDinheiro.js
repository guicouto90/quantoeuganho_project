import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function BeneficiosDinheiro() {
  const {
    salarioAnual,
    plr,
    totalBeneficiosAno,
    setTotalGanhosAno,
    setTotalGanhosMes,
    setTotalHora,
    setTotalDia,
    setGanhos30Dias,
    totalGanhosAno,
    totalGanhosMes,
    totalHora,
    totalDia,
    ganhos30Dias,
    dias,
    horas,
  } = useContext(Context);

  useEffect(() => {
    const results = () => {
        let totalDinheiro = plr + salarioAnual;
        let total = totalDinheiro + totalBeneficiosAno;
        
        //Contabilizacao dinheiro + beneficios;
        let totalMes = Math.round((total / 12) * 100 / 100);
        let totalDia = Math.round((totalMes / dias) * 100 / 100);
        let totalHora = Math.round((totalDia / horas) * 100 / 100);
        let total30 = Math.round((totalMes / 30) * 100 / 100);
        
        //SetStates
        setTotalGanhosAno(total);
        setTotalGanhosMes(totalMes);
        setTotalHora(totalHora);
        setTotalDia(totalDia);
        setGanhos30Dias(total30);
    };
    results();
  }, [])

  return(
    <section className="beneficios-dinheiro">
      <h4>Contabilização mais os ganhos em dinheiro</h4>
      <h4>(salario liquido com férias e 13 + PLR + Comissões):</h4>
      <table>
      <tr>
          <th>Ganho liquido de salario mais beneficios por hora: </th>
          <tb>{`R$${totalHora.toFixed(2)} por hora`}</tb>
        </tr>
        <tr>
          <th>Ganho liquido de salario mais beneficios por dia util: </th>
          <tb>{`R$${totalDia.toFixed(2)} por dia`}</tb>
        </tr>
        <tr>
          <th>Ganho liquido de salario mais beneficios mensal dividido por 30 dias: </th>
          <tb>{`R$${ganhos30Dias.toFixed(2)} por dia`}</tb>
        </tr>
        <tr>
          <th>Ganho liquido de salario mais beneficios mensal: </th>
          <tb>{`R$${totalGanhosMes.toFixed(2)} por mês`}</tb>
        </tr>
        <tr>
          <th>Ganho liquido de salario mais beneficios anual: </th>
          <tb>{`R$${totalGanhosAno.toFixed(2)} por ano`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default BeneficiosDinheiro;