import React, { useContext } from 'react';
import Context from '../../context';
import Inputs from './Inputs'
import '../../css/Ganhos.css';

function Tempo() {
  const {
    setDias,
    setHoras,
  } = useContext(Context);

  return(
    <section className="tempo-container">
      <h4>Jornada de trabalho:</h4>
      <div id="horas-dia">
        <Inputs
          id={'hours-day'}
          title={'Horas trabalhadas por dia: '}
          type={'number'}
          setValue={ setHoras }
          maxLength={ 24 }
          />
      </div>
      <div id="dias-mes">
        <Inputs
          id={'days-month'}
          title={'Dias trabalhados por mês: '}
          type={'number'}
          setValue={ setDias }
          maxLength={ 31 }
        />
      </div>
    </section>
  );
};

export default Tempo;