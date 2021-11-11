import React, { useContext, useEffect } from 'react';
import Context from '../../context';
import Inputs from './Inputs'

function Earnings() {

  const {
    setSalarioBruto,
    setPlr,
    setValeAlimentacao,
    setValeCultura,
    setValeRefeicao,
    setValeTransporte,
    setConvenioMedico,
    setConvenioOdontologico,
    setSeguroVida,
    setAcademia,
    setPrevidencia,
    setCarro,
    setEducacao,
    setCreche,
    valeAlimentacao,
    valeCultura,
    valeRefeicao,
    valeTransporte,
    convenioMedico,
    convenioOdontologico,
    seguroVida,
    academia,
    previdencia,
    carro,
    educacao,
    creche,
    setTotalBeneficiosMes,
    setTotalBeneficiosAno,
  } = useContext(Context);

  useEffect(() => {
    const totalBenefits = () => {
      let totalMes = 0;
      totalMes = valeAlimentacao + valeCultura + valeRefeicao + valeTransporte + convenioMedico + convenioOdontologico + seguroVida + academia + previdencia + carro + educacao + creche;
      let totalAno = totalMes * 12;
      if(totalMes > 0 && totalAno > 0) {
        setTotalBeneficiosMes(totalMes);
        setTotalBeneficiosAno(totalAno);
      }
    }
    totalBenefits();
  }, [ valeAlimentacao, valeCultura, valeRefeicao, valeTransporte,convenioMedico, convenioOdontologico, seguroVida, academia, previdencia, carro, educacao,creche,setTotalBeneficiosMes,setTotalBeneficiosAno ]);

  

  return(
    <section>
      <h2>Ganhos mensal</h2>
      <div id="container-money">
        <h4>Dinheiro: </h4>
        <div id="salario-bruto">       
          <Inputs
            id={"gross-salary"}
            title={'Digite seu salário bruto: R$'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setSalarioBruto }
            required={ true }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"plr"}
            title={'PLR Anual R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setPlr }
            required={ false }
          />
        </div>
      </div>
      <div id="vales">
        <h4>Vales: </h4>
        <div id="salario-bruto">
          <Inputs
            id={"VA"}
            title={'Vale Alimentação R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setValeAlimentacao }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"VR"}
            title={'Vale Refeição R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setValeRefeicao }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"Vale cultura"}
            title={'Vale Cultura R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setValeCultura }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"Vale transporte"}
            title={'Vale transporte e/ou combustível R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setValeTransporte }
            required={ false }
          />
        </div>
      </div>
      <div id="saude">
        <h4>Beneficios saúde:</h4>
        <div id="salario-bruto">
          <Inputs
            id={"convenio-medico"}
            title={'Valor do convênio médico R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setConvenioMedico }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"convenio-odontologico"}
            title={'Valor do convênio odontológico R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setConvenioOdontologico }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"seguro-vida"}
            title={'Valor do seguro de vida R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setSeguroVida }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"convenio-academia"}
            title={'Valor do convenio com academia R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setAcademia }
            required={ false }
          />
        </div>
      </div>
      <div id="outros">
        <h4>Outros:</h4>
        <div id="salario-bruto">
          <Inputs
            id={"previdencia"}
            title={'Contribuição voluntária Previdencia R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setPrevidencia }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"carro"}
            title={'Valor do aluguel do carro pago pela empresa R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setCarro }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"educacao"}
            title={'Valor do incentivo educacional pago pela empresa R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setEducacao }
            required={ false }
          />
        </div>
        <div id="salario-bruto">
          <Inputs
            id={"auxilio-creche"}
            title={'Valor do auxilio creche pago pela empresa R$:'}
            type={'number'}
            placeholder={"Utilize '.'(ponto) para centavos"}
            setValue={ setCreche }
            required={ false }
          />
        </div>
      </div>
    </section>
  );
};

export default Earnings;