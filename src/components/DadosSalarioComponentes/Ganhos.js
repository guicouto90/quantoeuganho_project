import React, { useContext, useEffect } from 'react';
import Context from '../../context';
import Inputs from './Inputs';
import '../../css/Ganhos.css';
import '../../css/InputsNoArrows.css';

function Ganhos() {

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
    setOutros,
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
    outros,
    carro,
    educacao,
    creche,
    setTotalBeneficiosMes,
    setTotalBeneficiosAno,
  } = useContext(Context);

  useEffect(() => {
    const totalBenefits = () => {
      let totalMes = 0;
      totalMes = valeAlimentacao + valeCultura + valeRefeicao + valeTransporte + convenioMedico + convenioOdontologico + seguroVida + academia + outros + carro + educacao + creche;
      let totalAno = totalMes * 12;
      if(totalMes > 0 && totalAno > 0) {
        setTotalBeneficiosMes(totalMes);
        setTotalBeneficiosAno(totalAno);
      }
    }
    totalBenefits();
  }, [ valeAlimentacao, valeCultura, valeRefeicao, valeTransporte,convenioMedico, convenioOdontologico, seguroVida, academia, outros, carro, educacao,creche,setTotalBeneficiosMes,setTotalBeneficiosAno ]);

  return(
    <section>
      <div className="dinheiro-container">
        <h4>Remuneração em dinheiro: </h4>
        <div id="salario-bruto">       
          <Inputs
            id={"gross-salary"}
            title={'Salário bruto mensal:'}
            type={'number'}
            setValue={ setSalarioBruto }
            required={ true }
          />
        </div>
        <div id="plr">
          <Inputs
            id={"plr"}
            title={'PLR/Bônus anual:'}
            type={'number'}
            setValue={ setPlr }
            required={ false }
          />
        </div>
      </div>
      <section className="beneficios-container">
        <h4>Benefícios:</h4>
        <h6>*Inserir valor mensal</h6>
        <div id="vales">
          <div id="vale-alimentacao">
            <Inputs
              id={"VA"}
              title={'Vale Alimentação:'}
              type={'number'}
              setValue={ setValeAlimentacao }
              required={ false }
            />
          </div>
          <div id="vale-refeicao">
            <Inputs
              id={"VR"}
              title={'Vale Refeição:'}
              type={'number'}
              setValue={ setValeRefeicao }
              required={ false }
            />
          </div>
          <div id="vale-cultura">
            <Inputs
              id={"Vale cultura"}
              title={'Vale Cultura:'}
              type={'number'}
              setValue={ setValeCultura }
              required={ false }
            />
          </div>
          <div id="vale-transporte">
            <Inputs
              id={"Vale transporte"}
              title={'Vale transporte:'}
              type={'number'}
              setValue={ setValeTransporte }
              required={ false }
            />
          </div>
        </div>
        <div id="saude">
          <div id="convenio-medico">
            <Inputs
              id={"convenio-medico"}
              title={'Convênio médico:'}
              type={'number'}
              setValue={ setConvenioMedico }
              required={ false }
            />
          </div>
          <div id="convenio-odontologic">
            <Inputs
              id={"convenio-odontologico"}
              title={'Convênio odontológico:'}
              type={'number'}
              setValue={ setConvenioOdontologico }
              required={ false }
            />
          </div>
          <div id="seguro-vida">
            <Inputs
              id={"seguro-vida"}
              title={'Seguro de vida:'}
              type={'number'}
              setValue={ setSeguroVida }
              required={ false }
            />
          </div>
          <div id="convenio-academia">
            <Inputs
              id={"convenio-academia"}
              title={'Auxílio academia:'}
              type={'number'}
              setValue={ setAcademia }
              required={ false }
            />
          </div>
        </div>
        <div id="outros">
          <div id="auxilio-creche">
            <Inputs
              id={"auxilio-creche"}
              title={'Auxilio creche:'}
              type={'number'}
              setValue={ setCreche }
              required={ false }
            />
          </div>
          <div id="carro">
            <Inputs
              id={"carro"}
              title={'Aluguel de carro:'}
              type={'number'}
              setValue={ setCarro }
              required={ false }
            />
          </div>
          <div id="educacao">
            <Inputs
              id={"educacao"}
              title={'Incentivo educacional:'}
              type={'number'}
              setValue={ setEducacao }
              required={ false }
            />
          </div>
          <div id="outros">
            <Inputs
              id={"outros"}
              title={'Outros benefícios:'}
              type={'number'}
              setValue={ setOutros }
              required={ false }
            />
          </div>
        </div>
      </section>
      
    </section>
  );
};

export default Ganhos;