import React from 'react';
import Descontos from '../components/Descontos';
import Resultados from '../components/Resultados';
import HorasTrabalhadas from '../components/HorasTrabalhadas';
import Dolar from '../components/Dolar';

function DetalhesSalario() {
  return(
    <main>
      <div className="header">
        <h1>AFINAL, QUANTO EU GANHO?</h1>
      </div>
        <Resultados />
        <Descontos />
        <HorasTrabalhadas />
        <Dolar />
    </main>
  );
}

export default DetalhesSalario;