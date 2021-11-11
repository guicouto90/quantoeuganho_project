import React, { useContext, useEffect } from 'react';
import Context from '../context';
import '../css/ResultsHours.css'

function ResultsHours() {
  const 
  { 
    ganhoDiaMes,
    ganhoDia,
    ganhoHora,
    enableResults,
    salarioAnual,
    plr,
    totalBeneficiosAno,
    setTotalDinheiroAno,
    setTotalGanhosAno,
    setDinheiroHora,
    setDinheiroDia,
    setTotalHora,
    setTotalDia,
    dias,
    horas,
  } = useContext(Context);

  useEffect(() => {
    const totalEvery = () => {
      let totalDinheiro = plr + salarioAnual;
      let total = totalDinheiro + totalBeneficiosAno;
      //Cont somente de dinheiro(salario + plr);
      let totalMesDin = Math.round((totalDinheiro / 12) * 100) / 100;
      let totalDiaDin = Math.round((totalMesDin / dias) * 100) / 100;
      let totalHoraDin = Math.round((totalDiaDin / horas) * 100) / 100;
      //Cont dinheiro + beneficios;
      let totalMes = Math.round((total / 12) * 100 / 100);
      let totalDia = Math.round((totalMes / dias) * 100 / 100);
      let totalHora = Math.round((totalDia / horas) * 100 / 100);
      //SetStates
      setTotalDinheiroAno(totalDinheiro);
      setTotalGanhosAno(total);   
      setDinheiroHora(totalHoraDin);
      setDinheiroDia(totalDiaDin);
      setTotalHora(totalHora);
      setTotalDia(totalDia);
    };
    totalEvery();
  },[]);
  
  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="container-results-hours">
        <h2>Contabilização em tempo</h2>
        <table>
          <tr>
            <th>Ganho liquido por hora trabalhada sem PLR:</th>
            <tb>{`R$${ganhoHora}`}</tb>
          </tr>
          <tr>
            <th>Ganho liquido por dia trabalhado sem PLR:</th>
            <tb>{`R$${ganhoDia}`}</tb>
          </tr>
          <tr>
            <th>Salário liquido dividido por 30 dias no mês sem PLR: </th>
            <tb>{`R$${ ganhoDiaMes }`}</tb>
          </tr>
          <tr>
            <th>Salário liquido anual com 13 e 1/3 férias sem PLR:</th>
            <tb>{`R$${salarioAnual}`}</tb>
          </tr>
        </table>
      </section>
    );
  }

  
}

export default ResultsHours;