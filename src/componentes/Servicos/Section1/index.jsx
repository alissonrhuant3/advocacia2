import "./styles/styles.css";

export default function ServicosS1() {
  return (
    <section className="container-fluid g-0 servicos1">
      <div className="servicos_container">
          <div className="servicos_leftComponents">
            <h1 className="servicos_title">
              Proposta Comercial
            </h1>

            <div className="servicos_service">
              <span className="servicosAssessoria">Assessoria</span>
              <h1 className="servicosPlan servicos1_Plan">SILVER</h1>

              <span className="servicosPrice">Investimento: R$800.00/<span className="servicosPriceMonth">mês</span></span>
            </div>
          </div>

          <div className="servicos_rightComponents">
            <ul>
              <li className="servicos_element" >Serviço Preventivo</li>
              <li className="servicos_element" >Consultoria</li>
              <li className="servicos_element" >Elaboração de Contrato</li>
              <li className="servicos_element" >Análise de contrato</li>
              <li className="servicos_element" >Acompanhamento da Empresa</li>
              <li className="servicos_element" >Auxílio nas tomadas de decisões</li>
              <li className="servicos_element" >Elaboração de acordos e propostas</li>
            </ul>
          </div>
        </div>
    </section>
  )
}