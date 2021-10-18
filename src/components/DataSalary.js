import React, { useContext } from 'react';
import Context from '../context';
import Inputs from './DataSalaryComponents/Inputs';


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
      <header>
        <h1>AFINAL, QUANTO EU GANHO?</h1>
      </header>
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
            />
          </div>
          <div id="dias-mes">
            <Inputs
              id={'days-month'}
              title={'Digite os dias trabalhados por mês: '}
              type={'number'}
              onChange={ handleOnChangeDias }
            />
          </div>
        </div>
    </section>
  );
}

export default DataSalary;