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
    totalBeneficiosMesReal, 
    setTotalBeneficiosMesReal,
    totalBeneficiosAnoReal,
    setTotalBeneficiosAnoReal,
  } = useContext(Context);

  useEffect(() => {
    const results = () => {
      let beneDias = Math.round((totalBeneficiosMes / dias) * 100 / 100);
      let beneHoras = Math.round((beneDias / horas) * 100 / 100);
      let beneAno = totalBeneficiosAno;
      let beneMes = totalBeneficiosMes;
      setBeneficiosHora(beneHoras.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
      setBeneficiosDias(beneDias.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
      setTotalBeneficiosAnoReal(beneAno.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
      setTotalBeneficiosMesReal(beneMes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
    };
    results();
  }, [dias, horas, setBeneficiosDias, setBeneficiosHora, totalBeneficiosMes, setTotalBeneficiosMesReal, setTotalBeneficiosAnoReal, totalBeneficiosAno]);

  return(
    <section className="beneficios">
      <h4>Remuneração em benefícios:</h4>
      <table>
      <tr>
          <th>Anual: </th>
          <tb>{`${totalBeneficiosAnoReal} por ano`}</tb>
        </tr>
        <tr>
          <th>Mensal: </th>
          <tb>{`${totalBeneficiosMesReal} por mês`}</tb>
        </tr>
        <tr>
          <th>Por dia trabalhado: </th>
          <tb>{`${beneficiosDias} por dia`}</tb>
        </tr>
        <tr>
          <th>Por hora trabalhada: </th>
          <tb>{`${beneficiosHora} por hora`}</tb>
        </tr>
      </table>
    </section>
  );
};

export default Beneficios;