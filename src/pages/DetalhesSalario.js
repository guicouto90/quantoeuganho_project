import React from 'react';
import Descontos from '../components/Descontos';
import Resultados from '../components/Resultados';
import HorasTrabalhadas from '../components/HorasTrabalhadas';
import Dolar from '../components/Dolar';
import DadosDigitados from '../components/DadosDigitados';

function DetalhesSalario() {
  return(
    <main>
      <div className="header">
        <h1>AFINAL, QUANTO EU GANHO?</h1>
      </div>
      <div className="results-container">
        <DadosDigitados />
        <Descontos />
      </div>
      <div className="results-container">
        
      </div>
      <div className="results-container">        
        <Resultados />
      </div>
      <div className="hours-container">
        <HorasTrabalhadas />
        <Dolar />
      </div>
    </main>
  );
}

export default DetalhesSalario;