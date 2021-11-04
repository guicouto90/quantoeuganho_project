import React, { useContext } from 'react';
import Context from '../context';
import '../css/WorkedHours.css';

function WorkedHours() {
  const 
  { 
    hoursJapones,
    hoursTanque,
    hoursCarro,
    hoursImovel,
    hoursIphone,
    enableResults,
  } = useContext(Context);
  
  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="container-results-worked-hours">
        <h2>Quantas horas eu preciso para ... ? </h2>
        <table>
          <tr>
            <th>Jantar em um restaurante japonês(R$90,00):</th>
            <tb>{hoursJapones}</tb>
          </tr>
          <tr>
            <th>Encher um tanque de gasolina de 50L(R$300,00):</th>
            <tb>{hoursTanque}</tb>
          </tr>
          <tr>
            <th>iPhone 12 128GB R$5300: </th>
            <tb>{hoursIphone}</tb>
          </tr>
          <tr>
            <th>Carro usado de R$30.000,00:</th>
            <tb>{hoursCarro}</tb>
          </tr>
          <tr>
            <th>Imóvel de R$250.000,00:</th>
            <tb>{hoursImovel}</tb>
          </tr>
        </table>
      </section>
    );
  }
}

export default WorkedHours;