import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function Salario13Ferias() {
  const {
    salarioHora13,
    salarioDia13,
    salario1330Dias,
    salarioMes13,
    salarioAnual,
    setSalarioHora13,
    setSalarioDia13,
    setSalario1330Dias,
    setSalarioMes13,
    dias,
    horas,
  } = useContext(Context);

  useEffect(() => {
    const results = () =>{
      //Contabilizacao Salarios 13 e 1/3 Ferias ANO/MES/DIA/HORA
      let totalMes13 = Math.round((salarioAnual / 12) * 100) / 100;
      let totalDia13 = Math.round((totalMes13 / dias) * 100) / 100;
      let totalHoras13 = Math.round((totalDia13 / horas) * 100) / 100;
      let totalDias3013 = Math.round((totalMes13 / 30) * 100) / 100;
      setSalarioMes13(totalMes13.toFixed(2));
      setSalarioDia13(totalDia13.toFixed(2));
      setSalarioHora13(totalHoras13.toFixed(2));
      setSalario1330Dias(totalDias3013.toFixed(2));
    };
    results();
  }, []);

  return(
    <section className="salario-13-ferias">
      <h5>Salário líquido + 13 + 1/3 férias</h5>
      <table>  
        <tr>
          <th>Ganho liquido por hora trabalhada:</th>
          <tb>{`R$${salarioHora13} por hora`}</tb>
        </tr>
        <tr>
          <th>Ganho liquido por dia trabalhado</th>
          <tb>{`R$${salarioDia13} por dia`}</tb>
        </tr>
        <tr>
          <th>Salário liquido mensal dividido por 30 dias no mês</th>
          <tb>{`R$${ salario1330Dias } por dia`}</tb>
        </tr>
        <tr>
          <th>Salário mensal COM 13 e 1/3 de férias: </th>
          <tb>{`R$${ salarioMes13 } por mes`}</tb>
        </tr>
        <tr>
          <th>Salário Anual COM 13 e 1/3 de férias: </th>
          <tb>{`R$${ salarioAnual } por ano`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default Salario13Ferias;