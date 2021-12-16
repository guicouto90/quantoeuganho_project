import React, { useContext } from 'react';
import Context from '../context';
import '../css/Resultados.css'
import Beneficios from './ResultadosComponentes/Beneficios';
import BeneficiosDinheiro from './ResultadosComponentes/BeneficiosDinheiro';
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
        <SalarioTotal />
        <Beneficios />
        <BeneficiosDinheiro />
      </section>
    );
  }

  
}

export default Resultados;