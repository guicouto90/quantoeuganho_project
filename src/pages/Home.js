import React from 'react';
import ButtonQuantoGanho from '../components/ButtonQuantoGanho';
import DataSalary from '../components/DataSalary';
import ResultsDiscounts from '../components/ResultsDiscounts';
import ResultsHours from '../components/ResultsHours';

function Home() {
  return(
    <main className="main-container">
      <DataSalary />
      <ButtonQuantoGanho />
      <ResultsDiscounts />
      <ResultsHours />
    </main>
  );
}

export default Home;