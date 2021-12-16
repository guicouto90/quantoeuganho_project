import React, { useContext, useEffect } from 'react';
import Context from '../context';
import '../css/HorasTrabalhadas.css';

function HorasTrabalhadas() {
  const 
  { 
    japones,
    tanque,
    carro30k,
    imovel,
    iphone,
    enableResults,
    setJapones,
    setTanque,
    setIphone,
    setCarro30k,
    setImovel,
    dinheiroHora,
  } = useContext(Context);

  useEffect(() => {
    const workedHours = (salarioHora) => {
      let japones = Math.round((90 / salarioHora) * 100) / 100;
      let hrasJapones = parseInt(japones);
      let minJapones = Math.round(((japones) - hrasJapones) * 60);
      japones = `${hrasJapones} horas e ${minJapones} min`;
      setJapones(japones);
      let tanque = Math.round((300 / salarioHora) * 100) / 100;
      let hrasTanque = parseInt(tanque);
      let minTanque = Math.round(((tanque) - hrasTanque) * 60);
      tanque = `${hrasTanque} horas e ${minTanque} min`;
      setTanque(tanque);
      let iphone = Math.round((5300 / salarioHora) * 100) / 100;
      let hrasIphone = parseInt(iphone);
      let minIphone = Math.round(((iphone) - hrasIphone) * 60);
      iphone = `${hrasIphone} horas e ${minIphone} min`;
      setIphone(iphone);
      let carro = Math.round((30000 / salarioHora) * 100) / 100;
      let hrasCarro = parseInt(carro);
      let minCarro = Math.round(((carro) - hrasCarro) * 60);
      carro = `${hrasCarro} horas e ${minCarro} min`;
      setCarro30k(carro);
      let imovel = Math.round((250000 / salarioHora) * 100) / 100;
      let hrasImovel = parseInt(imovel);
      let minImovel = Math.round(((imovel) - hrasImovel) * 60);
      imovel = `${hrasImovel} horas e ${minImovel} min`;
      setImovel(imovel);
    };
    workedHours(dinheiroHora);
  },[dinheiroHora, setCarro30k, setImovel, setIphone, setJapones, setTanque]);
  
  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="horas-trabalhadas">
        <h2>Tome boas decisões financeiras</h2>
        <h4>Quantas horas eu preciso trabalhar para ... ? </h4>
        <h6>* Calculo baseado somente na remuneração em dinheiro</h6>
        <table>
          <tr>
            <th>Rodízio japonês (R$ 90,00):</th>
            <tb>{japones}</tb>
          </tr>
          <tr>
            <th>Tanque cheio gasolina (R$ 300,00):</th>
            <tb>{tanque}</tb>
          </tr>
          <tr>
            <th>iPhone 12 128GB (R$ 5.300,00): </th>
            <tb>{iphone}</tb>
          </tr>
          <tr>
            <th>Carro usado de R$ 30.000,00:</th>
            <tb>{carro30k}</tb>
          </tr>
          <tr>
            <th>Imóvel de R$ 250.000,00:</th>
            <tb>{imovel}</tb>
          </tr>
        </table>
      </section>
    );
  }
}

export default HorasTrabalhadas;