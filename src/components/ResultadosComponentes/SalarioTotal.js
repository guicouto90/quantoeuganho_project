import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function SalarioTotal() {
  const {
    dinheiroHora,
    dinheiroDia,
    dinheiro30Dias,
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
    setDinheiro30Dias,
  } = useContext(Context);

  useEffect(() => {
    const results = () => {
      let totalDinheiro = plr + salarioAnual;
      //Contabilizacao somente de dinheiro(salario + plr);
      let totalMesDin = Math.round((totalDinheiro / 12) * 100) / 100;
      let totalDiaDin = Math.round((totalMesDin / dias) * 100) / 100;
      let totalHoraDin = Math.round((totalDiaDin / horas) * 100) / 100;
      let dinheiro30 = Math.round((totalMesDin / 30) * 100 / 100);
      setTotalDinheiroAno(totalDinheiro.toFixed(2));
      setTotalDinheiroMes(totalMesDin.toFixed(2));
      setDinheiroHora(totalHoraDin.toFixed(2));
      setDinheiroDia(totalDiaDin.toFixed(2));
      setDinheiro30Dias(dinheiro30.toFixed(2));
    };
    results();
  }, []);

  return(
    <section className="salario-total">
      <h5>Salário líquido + 13 + 1/3 férias + PLR + Comissões</h5>
      <table>
        <tr>
          <th>Ganho liquido por hora trabalhada:</th>
          <tb>{`R$${dinheiroHora} por hora`}</tb>
        </tr>
        <tr>
          <th>Ganho liquido por dia trabalhado: </th>
          <tb>{`R$${dinheiroDia} por dia`}</tb>
        </tr>
        <tr>
          <th>Salário liquido mensal dividido por 30 dias no mês: </th>
          <tb>{`R$${ dinheiro30Dias } por dia`}</tb>
        </tr>
        <tr>
          <th>Salário mensal COM 13 e 1/3 de férias + PLR + Comissões: </th>
          <tb>{`R$${ totalDinheiroMes } por mês`}</tb>
        </tr>
        <tr>
          <th>Salário Anual COM 13 e 1/3 de férias: </th>
          <tb>{`R$${ totalDinheiroAno } por ano`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default SalarioTotal;