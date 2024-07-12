import "./styles/styles.css";

export default function ServicosS1() {
  return (
    <section className="container-fluid g-0 servicos2">
      <div className="servicos_container">
          <div className="servicos_leftComponents">
            <h1 className="servicos_title">
              Proposta Comercial
            </h1>

            <div className="servicos_service">
              <span className="servicosAssessoria">Assessoria</span>
              <h1 className="servicosPlan servicos2_Plan">GOLD</h1>

              <span className="servicosPrice">Investimento: R$1200.00/<span className="servicosPriceMonth">mês</span></span>
            </div>
          </div>

          <div className="servicos_rightComponents">
            <ul className="servicosList" >
              <li className="servicos_element" >Serviço Preventivo e contencioso (defesas extrajudiciais e judiciais)</li>
              <li className="servicos_element" >Consultoria</li>
              <li className="servicos_element" >Elaboração de Contratos</li>
              <li className="servicos_element" >Análise de Contrato</li>
              <li className="servicos_element" >Acompanhamento da Empresa</li>
              <li className="servicos_element" >Auxílio nas tomadas de decisões</li>
              <li className="servicos_element" >Elaboração de acordos e propostas</li>
              <li className="servicos_element" >Registro de Marca</li>
              <li className="servicos_element" >Construção Pessoa Jurídica</li>
              <li className="servicos_element" >Contrato Social</li>
              <li className="servicos_element" >Prevenção trabalhista</li>
              <li className="servicos_element" >Defesa judicial, exceto demandas de alta complexidade</li>
            </ul>
          </div>
        </div>
    </section>
  )
}