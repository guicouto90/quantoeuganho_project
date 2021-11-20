import React, { useContext, useEffect } from 'react';
import Context from '../context';
import '../css/Resultados.css'
import Beneficios from './ResultadosComponentes/Beneficios';
import BeneficiosDinheiro from './ResultadosComponentes/BeneficiosDinheiro';
import Salario13Ferias from './ResultadosComponentes/Salario13Ferias';
import SalarioLiquido from './ResultadosComponentes/SalarioLiquido';
import SalarioTotal from './ResultadosComponentes/SalarioTotal';

function Resultados() {
  const 
  {
    enableResults,
  } = useContext(Context);
  
  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="resultados">
        <h2>Contabilizações</h2>
        <div className="money-container">
          <h4>Ganhos em dinheiro:</h4>
          <SalarioLiquido />
          <Salario13Ferias />
          <SalarioTotal />
        </div>
        <div className="benefits-container">
          <h4>Contabilização dos beneficios e dos ganhos</h4>
          <Beneficios />
          <BeneficiosDinheiro />
        </div>
      </section>
    );
  }

  
}

export default Resultados;