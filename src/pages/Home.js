import React from 'react';
import ButtonQuantoGanho from '../components/ButtonQuantoGanho';
import Currencies from '../components/Currencies';
import DataSalary from '../components/DataSalary';
import ResultsDiscounts from '../components/ResultsDiscounts';
import ResultsHours from '../components/ResultsHours';
import WorkedHours from '../components/WorkedHours';

function Home() {
  return(
    <main className="main-container">
      <DataSalary />
      <ButtonQuantoGanho />
      <div className="results-container">
        <ResultsDiscounts />
        <ResultsHours />
      </div>
      <div className="hours-container">
        <WorkedHours />
        <Currencies />
      </div>
    </main>
  );
}

export default Home;