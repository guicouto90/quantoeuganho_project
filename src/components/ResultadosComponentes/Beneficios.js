import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function Beneficios() {
  const {
    totalBeneficiosMes,
    totalBeneficiosAno,
    dias,
    horas,
    setBeneficiosHora,
    setBeneficiosDias,
    setBeneficios30Dias,
    beneficiosHora,
    beneficiosDias,
    beneficios30Dias,
  } = useContext(Context);

  useEffect(() => {
    const results = () => {
      let beneDias = Math.round((totalBeneficiosMes / dias) * 100 / 100);
      let beneHoras = Math.round((beneDias / horas) * 100 / 100);
      let trintaDias = Math.round((totalBeneficiosMes / 30) * 100 / 100);
      setBeneficiosHora(beneHoras);
      setBeneficiosDias(beneDias);
      setBeneficios30Dias(trintaDias);
    };
    results();
  }, [])

  return(
    <section>
      <h4>Contabilização dos beneficios</h4>
      <table>
      <tr>
          <th>Ganho de beneficios por hora: </th>
          <tb>{`R$${beneficiosHora.toFixed(2)} por hora`}</tb>
        </tr>
        <tr>
          <th>Ganho de beneficios por dia util: </th>
          <tb>{`R$${beneficiosDias.toFixed(2)} por dia`}</tb>
        </tr>
        <tr>
          <th>Ganho de beneficios mensal dividido por 30 dias: </th>
          <tb>{`R$${beneficios30Dias.toFixed(2)} por dia`}</tb>
        </tr>
        <tr>
          <th>Soma dos beneficios mensal: </th>
          <tb>{`R$${totalBeneficiosMes.toFixed(2)} por mês`}</tb>
        </tr>
        <tr>
          <th>Soma dos beneficios anual: </th>
          <tb>{`R$${totalBeneficiosAno.toFixed(2)} por ano`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default Beneficios;