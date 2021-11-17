import React, { useContext } from 'react';
import Context from '../context';

function DadosDigitados() {
  const {
    salarioBruto,
    plr,
    valeAlimentacao,
    valeRefeicao,
    valeCultura,
    valeTransporte,
    convenioMedico,
    convenioOdontologico,
    seguroVida,
    academia,
    previdencia,
    carro,
    educacao,
    creche,
    enableResults,
  } = useContext(Context);

  if(enableResults === false) {
    return '';
  } else {
    return(
      <section className="container-digit-data">
        <h2>Dados digitados:</h2>
        <table>
          <tr>
            <th>Salário Bruto: </th>
            <tb>{`R$${salarioBruto.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>PLR anual:</th>
            <tb>{`R$${plr.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Vale alimentação: </th>
            <tb>{`R$${valeAlimentacao.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Vale refeição:</th>
            <tb>{`R$${valeRefeicao.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Vale cultura:</th>
            <tb>{`R$${valeCultura.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Vale transporte:</th>
            <tb>{`R$${valeTransporte.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Convenio médico:</th>
            <tb>{`R$${convenioMedico.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Convenio odontologico:</th>
            <tb>{`R$${convenioOdontologico.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Seguro de vida:</th>
            <tb>{`R$${seguroVida.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Vale academia:</th>
            <tb>{`R$${academia.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Contribuição empresa previdência:</th>
            <tb>{`R$${previdencia.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Aluguel de carro pago pela empresa:</th>
            <tb>{`R$${carro.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Incentivo educacional:</th>
            <tb>{`R$${educacao.toFixed(2)}`}</tb>
          </tr>
          <tr>
            <th>Auxilio creche:</th>
            <tb>{`R$${creche.toFixed(2)}`}</tb>
          </tr>
        </table>
      </section>
    );
  };
};

export default DadosDigitados;