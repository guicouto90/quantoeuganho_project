import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function SalarioTotal() {
  const {
    salarioAnual,
    dias,
    horas,
    plr,
    setTotalDinheiroAno,
    setTotalDinheiroMes,
    setDinheiroHora,
    setDinheiroDia,
    totalDinheiroAnoReal, 
    setTotalDinheiroAnoReal,
    totalDinheiroMesReal, 
    setTotalDinheiroMesReal,
    totalDinheiroHoraReal, 
    setTotalDinheiroHoraReal,
    totalDinheiroDiaReal, 
    setTotalDinheiroDiaReal,
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
      //Fonte conversao: https://www.horadecodar.com.br/2020/09/01/formatar-moeda-brasileira-em-javascript-float-para-real/
      setTotalDinheiroAnoReal(totalDinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
      setTotalDinheiroMesReal(totalMesDin.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
      setTotalDinheiroHoraReal(totalHoraDin.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
      setTotalDinheiroDiaReal(totalDiaDin.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    };
    results();
  }, [dias, horas, plr, 
    salarioAnual, 
    setDinheiroDia, 
    setDinheiroHora, 
    setTotalDinheiroAno, 
    setTotalDinheiroMes,
    totalDinheiroAnoReal,
    setTotalDinheiroAnoReal,
    totalDinheiroMesReal, 
    setTotalDinheiroMesReal,
    totalDinheiroHoraReal, 
    setTotalDinheiroHoraReal,
    totalDinheiroDiaReal, 
    setTotalDinheiroDiaReal]);

  return(
    <section className="salario-total">
      <h4>Remuneração líquida em dinheiro:</h4>
      <h6>* inclui 13° + 1/3 de férias + PLR/Bônus</h6>
      <table>
      <tr>
          <th>Anual: </th>
          <tb>{` ${ totalDinheiroAnoReal } por ano`}</tb>
        </tr>
       <tr>
          <th>Mensal:</th>
          <tb>{` ${ totalDinheiroMesReal } por mês`}</tb>
        </tr>
        <tr>
          <th>Por dia trabalhado:</th>
          <tb>{` ${totalDinheiroDiaReal} por dia`}</tb>
        </tr>
        <tr>
          <th>Por hora trabalhada:</th>
          <tb>{` ${totalDinheiroHoraReal} por hora`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default SalarioTotal;