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
    beneficiosHora,
    beneficiosDias,
  } = useContext(Context);

  useEffect(() => {
    const results = () => {
      let beneDias = Math.round((totalBeneficiosMes / dias) * 100 / 100);
      let beneHoras = Math.round((beneDias / horas) * 100 / 100);
      setBeneficiosHora(beneHoras);
      setBeneficiosDias(beneDias);
    };
    results();
  }, [dias, horas, setBeneficiosDias, setBeneficiosHora, totalBeneficiosMes])

  return(
    <section className="beneficios">
      <h4>Remuneração em benefícios:</h4>
      <table>
      <tr>
          <th>Anual: </th>
          <tb>{`R$ ${totalBeneficiosAno.toFixed(2)} por ano`}</tb>
        </tr>
        <tr>
          <th>Mensal: </th>
          <tb>{`R$ ${totalBeneficiosMes.toFixed(2)} por mês`}</tb>
        </tr>
        <tr>
          <th>Por dia trabalhado: </th>
          <tb>{`R$ ${beneficiosDias.toFixed(2)} por dia`}</tb>
        </tr>
        <tr>
          <th>Por hora trabalhada: </th>
          <tb>{`R$ ${beneficiosHora.toFixed(2)} por hora`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default Beneficios;