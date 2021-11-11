import React, { useContext } from 'react';
import Context from '../../context';
import Inputs from './Inputs'

function Time() {
  const {
    setDias,
    setHoras,
  } = useContext(Context);

  return(
    <section>
      <h2>Tempo de trabalho</h2>
      <div id="horas-dia">
        <Inputs
          id={'hours-day'}
          title={'Digite as horas trabalhadas por dia: '}
          type={'number'}
          setValue={ setHoras }
          maxLength={ 24 }
          />
      </div>
      <div id="dias-mes">
        <Inputs
          id={'days-month'}
          title={'Digite os dias trabalhados por mês: '}
          type={'number'}
          setValue={ setDias }
          maxLength={ 31 }
        />
      </div>
    </section>
  );
};

export default Time;