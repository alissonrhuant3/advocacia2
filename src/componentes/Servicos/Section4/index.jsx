import "./styles/styles.css";

export default function Servicos4() {
  return (
    <section className="container-fluid g-0 servicos4">
      <div className="servicos4_titleDiv">
        <h1 className="servicos4_title" >Serviços Avulsos</h1>
      </div>

      <div className="servicos4_listDiv">
        <ul className="servicos4_list">
          <li className="servicos4_element" >Consultoria - R$ 400,00</li>
          <li className="servicos4_element" >Elaboração de Contrato - R$ 900,00 (varia a depender da complexidade)</li>
          <li className="servicos4_element" >Análise de contrato - R$ 200,00 a R$ 500,00 (a depender da complexidade)</li>
          <li className="servicos4_element" >Elaboração de acordos e propostas - R$ 350,00</li>
          <li className="servicos4_element" >Registro de Marca - R$ 1.500 a R$ 5.000,00</li>
          <li className="servicos4_element" >Notificação Extrajudicial - R$ 400,00</li>
          <li className="servicos4_element" >Contrato Social - R$ 1.000,00</li>
          <li className="servicos4_element" >Recuperação de contas - A partir de R$ 2.500,00</li>
          <li className="servicos4_element" >Demais ações - a consultar</li>
          <li className="servicos4_element" >Demais serviços - a consultar</li>
        </ul>
      </div>
    </section>
  )
}