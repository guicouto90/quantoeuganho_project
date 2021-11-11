import React from 'react';
import ResultsDiscounts from '../components/ResultsDiscounts';
import ResultsHours from '../components/ResultsHours';
import WorkedHours from '../components/WorkedHours';
import Currencies from '../components/Currencies';

function SalaryDetails() {
  return(
    <main>
      <div className="header">
        <h1>AFINAL, QUANTO EU GANHO?</h1>
      </div>
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

export default SalaryDetails;