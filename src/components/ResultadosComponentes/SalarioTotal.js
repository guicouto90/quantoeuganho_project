import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function SalarioTotal() {
  const {
    dinheiroHora,
    dinheiroDia,
    totalDinheiroMes,
    totalDinheiroAno,
    salarioAnual,
    dias,
    horas,
    plr,
    setTotalDinheiroAno,
    setTotalDinheiroMes,
    setDinheiroHora,
    setDinheiroDia,
  } = useContext(Context);

  useEffect(() => {
    const results = () => {
      let totalDinheiro = plr + salarioAnual;
      let totalMesDin = Math.round((totalDinheiro / 12) * 100) / 100;
      let totalDiaDin = Math.round((totalMesDin / dias) * 100) / 100;
      let totalHoraDin = Math.round((totalDiaDin / horas) * 100) / 100;
      setTotalDinheiroAno(totalDinheiro);
      setTotalDinheiroMes(totalMesDin);
      setDinheiroHora(totalHoraDin);
      setDinheiroDia(totalDiaDin);
    };
    results();
  }, [dias, horas, plr, salarioAnual, setDinheiroDia, setDinheiroHora, setTotalDinheiroAno, setTotalDinheiroMes]);

  return(
    <section className="salario-total">
      <h4>Remuneração líquida em dinheiro:</h4>
      <h6>* inclui 13° + 1/3 de férias + PLR/Bônus</h6>
      <table>
      <tr>
          <th>Anual: </th>
          <tb>{`R$ ${ totalDinheiroAno.toFixed(2) } por ano`}</tb>
        </tr>
       <tr>
          <th>Mensal:</th>
          <tb>{`R$ ${ totalDinheiroMes.toFixed(2) } por mês`}</tb>
        </tr>
        <tr>
          <th>Por dia trabalhado:</th>
          <tb>{`R$ ${dinheiroDia.toFixed(2)} por dia`}</tb>
        </tr>
        <tr>
          <th>Por hora trabalhada:</th>
          <tb>{`R$ ${dinheiroHora.toFixed(2)} por hora`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default SalarioTotal;