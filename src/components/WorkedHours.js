import React, { useContext, useEffect } from 'react';
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
    setHoursJapones,
    setHoursTanque,
    setHoursIphone,
    setHoursCarro,
    setHoursImovel,
    ganhoHora,
  } = useContext(Context);

  useEffect(() => {
    const workedHours = (salarioHora) => {
      let japones = Math.round((90 / salarioHora) * 100) / 100;
      let hrasJapones = parseInt(japones);
      let minJapones = Math.round(((japones) - hrasJapones) * 60);
      japones = `${hrasJapones} horas e ${minJapones} min`;
      setHoursJapones(japones);
      let tanque = Math.round((300 / salarioHora) * 100) / 100;
      let hrasTanque = parseInt(tanque);
      let minTanque = Math.round(((tanque) - hrasTanque) * 60);
      tanque = `${hrasTanque} horas e ${minTanque} min`;
      setHoursTanque(tanque);
      let iphone = Math.round((5300 / salarioHora) * 100) / 100;
      let hrasIphone = parseInt(iphone);
      let minIphone = Math.round(((iphone) - hrasIphone) * 60);
      iphone = `${hrasIphone} horas e ${minIphone} min`;
      setHoursIphone(iphone);
      let carro = Math.round((30000 / salarioHora) * 100) / 100;
      let hrasCarro = parseInt(carro);
      let minCarro = Math.round(((carro) - hrasCarro) * 60);
      carro = `${hrasCarro} horas e ${minCarro} min`;
      setHoursCarro(carro);
      let imovel = Math.round((250000 / salarioHora) * 100) / 100;
      let hrasImovel = parseInt(imovel);
      let minImovel = Math.round(((imovel) - hrasImovel) * 60);
      imovel = `${hrasImovel} horas e ${minImovel} min`;
      setHoursImovel(imovel);
    };
    workedHours(ganhoHora);
  },[]);
  
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