import React from 'react';
import Descontos from '../components/Descontos';
import Resultados from '../components/Resultados';
import HorasTrabalhadas from '../components/HorasTrabalhadas';
import Dolar from '../components/Dolar';
import '../css/DetalhesSalario.css'

function DetalhesSalario() {
  return(
    <main >
      <div className="header">
        <h1>AFINAL, QUANTO EU GANHO?</h1>
      </div>
      <div>
        <div className="detalhes-salario">
          <div className="res-desc-container">
            <Descontos />
            <Resultados />
          </div>
        </div>
        <div className="horas-dolar-container">
          <HorasTrabalhadas />
          <Dolar />
        </div>
      </div>
    </main>
  );
}

export default DetalhesSalario;