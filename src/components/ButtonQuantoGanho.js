import React, { useContext } from 'react';
import Context from '../context';
import Button from 'react-bootstrap/Button';

function ButtonQuantoGanho() {
  const 
  { 
    salarioBruto, 
    setSalarioLiquido,
    setIRRF, 
    setPerIR, 
    setINSS, 
    setPerINSS,
    setDescontos,
    setEnableResults,
    horas,
    dias,
    setGanhoDia,
    setGanhoHora,
  } = useContext(Context);

  const horasDiasGanho = (salario) => {
    let salarioDia = Math.round((salario/dias) * 100) / 100;
    setGanhoDia(salarioDia);
    let salarioHora = Math.round((salarioDia/horas) * 100) / 100;
    setGanhoHora(salarioHora);
  };

  const descontoIRRF = (descInss) => {
    let valueIR = 0;
    let salario = 0;
    let descontoTotal = 0;
    if(descInss <= 1903.98) {
      salario = Math.round((descInss * 100) / 100);
      descontoTotal = Math.round((salarioBruto - salario) * 100) / 100;
      setIRRF('Isento');
      setPerIR('Isento');
      setSalarioLiquido(descInss);
      setDescontos(descontoTotal);
      horasDiasGanho(salario);
    } else if(descInss >= 1903.99 && descInss <= 2826.65) {
      valueIR = descInss * 0.075 - 142.8;
      valueIR = Math.round(valueIR * 100) / 100;
      salario = Math.round((descInss - valueIR) * 100) /100;
      descontoTotal = Math.round((salarioBruto - salario) * 100) / 100;
      setDescontos(descontoTotal);
      setSalarioLiquido(salario);
      setIRRF(valueIR);
      setPerIR('7.5%')
      horasDiasGanho(salario);
    } else if(descInss >= 2826.66 && descInss <= 3751.05) {
      valueIR = descInss * 0.15 - 354.8;
      valueIR = Math.round(valueIR * 100) / 100;
      salario = Math.round((descInss - valueIR) * 100) /100;
      descontoTotal = Math.round((salarioBruto - salario) * 100) / 100;
      setDescontos(descontoTotal);
      setSalarioLiquido(salario);
      setIRRF(valueIR);
      setPerIR('15%');
      horasDiasGanho(salario);
    } else if(descInss >= 3751.06 && descInss <= 4664.68) {
      valueIR = descInss * 0.225 - 636.13;
      valueIR = Math.round(valueIR * 100) / 100;
      salario = Math.round((descInss - valueIR) * 100) /100;
      descontoTotal = Math.round((salarioBruto - salario) * 100) / 100;
      setDescontos(descontoTotal);
      setSalarioLiquido(salario);
      setIRRF(valueIR);
      setPerIR('22.5%');
      horasDiasGanho(salario);
    } else if(descInss >= 4664.69) {
      valueIR = descInss * 0.275 - 869.36;
      valueIR = Math.round(valueIR * 100) / 100;
      salario = Math.round((descInss - valueIR) * 100) /100;
      descontoTotal = salarioBruto - salario;
      setDescontos(descontoTotal);
      setSalarioLiquido(salario);
      setIRRF(valueIR);
      setPerIR('27.5%');
      horasDiasGanho(salario);
    }
  };

  const descontoINSS = () => {
    let valueINSS = 0;
    let descInss = 0;
    if(salarioBruto <= 1100) {
      valueINSS = salarioBruto * 0.075;
      valueINSS = Math.round(valueINSS * 100) / 100;
      descInss = salarioBruto - valueINSS;
      setINSS(valueINSS);
      descontoIRRF(descInss);
      setPerINSS('7.5%')
    } else if(salarioBruto >= 1100.01 && salarioBruto <= 2203.48) {
      valueINSS = (salarioBruto - 1100) * 0.09 + 82.5;
      valueINSS = Math.round(valueINSS * 100) / 100;
      setINSS(valueINSS);
      descInss = salarioBruto - valueINSS;
      descontoIRRF(descInss);
      setPerINSS('9%')
    } else if(salarioBruto >= 2203.49 && salarioBruto <= 3305.22) {
      valueINSS = (salarioBruto - 2203.48) * 0.12 + 181.81;
      valueINSS = Math.round(valueINSS * 100) / 100;
      setINSS(valueINSS);
      descInss = salarioBruto - valueINSS;
      descontoIRRF(descInss);
      setPerINSS('12%')
    } else if(salarioBruto >= 3305.23 && salarioBruto <= 6433.57) {
      setPerINSS('14%')
      valueINSS = (salarioBruto - 3305.22) * 0.14 + 314.01;
      valueINSS = Math.round(valueINSS * 100) / 100;
      descInss = salarioBruto - valueINSS;
      descontoIRRF(descInss);
      if(valueINSS > 751.99) {
        valueINSS = 751.99
        descInss = salarioBruto - valueINSS;
        descontoIRRF(descInss);
        setPerINSS('TETO')
      }
      setINSS(valueINSS);
    } else {
      valueINSS = 751.99
      descInss = salarioBruto - valueINSS;
      descontoIRRF(descInss);
      setINSS(751.99);
      setPerINSS('TETO');
    }
  };

  const handleOnClick = () => {
    descontoINSS();
    setEnableResults(true);
  };

  return(
    <section className="container-button-quanto-ganho">
      <Button
        variant="outline-success"
        onClick={ handleOnClick }
      >
        Quanto eu ganho?
      </Button>
    </section>
  );
}

export default ButtonQuantoGanho;