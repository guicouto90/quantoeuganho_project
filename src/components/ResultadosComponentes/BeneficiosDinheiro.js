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
    totalGanhosAno,
    totalGanhosMes,
    totalHora,
    totalDia,
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
        
        //SetStates
        setTotalGanhosAno(total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        setTotalGanhosMes(totalMes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        setTotalHora(totalHora.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        setTotalDia(totalDia.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    };
    results();
  }, [dias, horas, plr, salarioAnual, setTotalDia, setTotalGanhosAno, setTotalGanhosMes, setTotalHora, totalBeneficiosAno]);

  return(
    <section className="beneficios-dinheiro">
      <h4>Remuneração líquida em dinheiro + </h4>
      <h4>benefícios:</h4>
      <table>
      <tr>
          <th>Anual: </th>
          <tb>{`${totalGanhosAno} por ano`}</tb>
        </tr>
        <tr>
          <th>Mensal: </th>
          <tb>{`${totalGanhosMes} por mês`}</tb>
        </tr>
        <tr>
          <th>Por dia trabalhado: </th>
          <tb>{`${totalDia} por dia`}</tb>
        </tr>
        <tr>
          <th>Por hora trabalhada: </th>
          <tb>{`${totalHora} por hora`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default BeneficiosDinheiro;