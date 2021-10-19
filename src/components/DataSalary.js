import React, { useContext } from 'react';
import Context from '../context';
import Inputs from './DataSalaryComponents/Inputs';
import '../css/DataSalary.css';

function DataSalary() {
  const { 
    setSalarioBruto,
    setDias,
    setHoras,  
  } = useContext(Context);

  const handleOnChangeSalarioBruto = ( { target: { value } } ) => {
    setSalarioBruto(Number(value));
  };

  const handleOnChangeHoras = ( { target: { value } } ) => {
    setHoras(Number(value));
  };

  const handleOnChangeDias = ( { target: { value } } ) => {
    setDias(Number(value));
  };

  return(
    <section>
      <div className="header">
        <h1>AFINAL, QUANTO EU GANHO?</h1>
      </div>
        <div className="container-inputs">
          <div id="salario-bruto">
            <Inputs
              id={"gross-salary"}
              title={'Digite seu salário bruto: R$'}
              type={'number'}
              placeholder={"Utilize '.'(ponto) para centavos"}
              onChange={ handleOnChangeSalarioBruto }
            />
          </div>
          <div id="horas-dia">
            <Inputs
              id={'hours-day'}
              title={'Digite as horas trabalhadas por dia: '}
              type={'number'}
              onChange={ handleOnChangeHoras }
              maxLength={ 24 }
            />
          </div>
          <div id="dias-mes">
            <Inputs
              id={'days-month'}
              title={'Digite os dias trabalhados por mês: '}
              type={'number'}
              onChange={ handleOnChangeDias }
              maxLength={ 31 }
            />
          </div>
        </div>
    </section>
  );
}

export default DataSalary;