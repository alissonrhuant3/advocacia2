import "./styles/styles.css";

export default function SobreS2() {
  return (
    <section className="container-fluid g-0 sobres2">
      <div className="sobres2_titlediv">
        <h1 className="sobres2_title">Oque um Advogado <br /> Empresarial digital faz?</h1>
      </div>

      <div className="sobres2_container">
        <div className="sobres2_image">
          <img src="https://placehold.co/431x484.png" alt="Imagem" />
        </div>

        <div className="sobres2_text">
          <p>O Advogado Empresarial tem o papel de prevenir e evitar erros, gastos, riscos. É responsável por toda a Proteção Jurídica da sua Empresa.</p>

          <ul className="sobres2_list">
            <li className="sobres2_element">Consultoria</li>
            <li className="sobres2_element">Tomada de decisões</li>
            <li className="sobres2_element">Elaboração de contratos</li>
            <li className="sobres2_element">Elaboração de contrato social</li>
            <li className="sobres2_element">Registro de marca</li>
            <li className="sobres2_element">Construção de pessoa jurídica</li>
            <li className="sobres2_element">Representação judicial</li>
            <li className="sobres2_element">Assessoria diária</li>
            <li className="sobres2_element">Emissão de relatórios</li>
          </ul>
        </div>
      </div>
    </section>
  )
}