import React, { useContext, useEffect } from 'react';
import Context from '../context';
import '../css/DataSalary.css';
import Time from './DataSalaryComponents/Time';
import Earnings from './DataSalaryComponents/Earnings';

function DataSalary() {
  const { 
    salarioBruto,
    dias,
    horas,
    setDisabledButton,
  } = useContext(Context);

  useEffect(() => {
    const enableButton = () => {
      if(salarioBruto > 0 && dias > 0 && horas > 0) {
        setDisabledButton(false);
      } else {
        setDisabledButton(true);
      }
    };
    enableButton();
  })

  return(
    <section>
      <div className="header">
        <h1>AFINAL, QUANTO EU GANHO?</h1>
      </div>
      <div className="main-container-inputs">
        <div className="container-inputs">
          <Earnings />
          <Time />
        </div>
      </div>
    </section>
  );
}

export default DataSalary;