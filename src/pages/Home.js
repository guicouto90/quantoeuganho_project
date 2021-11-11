import React from 'react';
import ButtonQuantoGanho from '../components/ButtonQuantoGanho';
import DataSalary from '../components/DataSalary';


function Home(props) {
  return(
    <main className="main-container">
      <DataSalary />
      <ButtonQuantoGanho history={ props.history } />
    </main>
  );
}

export default Home;