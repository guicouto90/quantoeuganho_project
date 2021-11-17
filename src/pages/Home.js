import React from 'react';
import BotaoQuantoEuGanho from '../components/BotaoQuantoEuGanho';
import DadosSalario from '../components/DadosSalario';


function Home(props) {
  return(
    <main className="main-container">
      <DadosSalario />
      <BotaoQuantoEuGanho history={ props.history } />
    </main>
  );
}

export default Home;