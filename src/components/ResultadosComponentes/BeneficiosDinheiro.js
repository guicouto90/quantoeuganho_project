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
        setTotalGanhosAno(total);
        setTotalGanhosMes(totalMes);
        setTotalHora(totalHora);
        setTotalDia(totalDia);
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
          <tb>{`R$ ${totalGanhosAno.toFixed(2)} por ano`}</tb>
        </tr>
        <tr>
          <th>Mensal: </th>
          <tb>{`R$ ${totalGanhosMes.toFixed(2)} por mês`}</tb>
        </tr>
        <tr>
          <th>Por dia trabalhado: </th>
          <tb>{`R$ ${totalDia.toFixed(2)} por dia`}</tb>
        </tr>
        <tr>
          <th>Por hora trabalhada: </th>
          <tb>{`R$ ${totalHora.toFixed(2)} por hora`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default BeneficiosDinheiro;