import "./styles/styles.css";

export default function SobreS3() {
  return (
    <section className="container-fluid g-0 sobres3">
      <div className="sobres3_titlediv">
        <h1 className="sobres3_title">Dúvidas Frequentes</h1>
      </div>

      <div className="sobres3_container">

        <div className="sobres3_faq">
          <span className="sobres3_pergunta">Para que serve a Assessoria Mensal?</span>
          <p className="sobres3_text">
            Você terá um Escritório de Advocacia a sua disposição para sanar todas as suas dúvidas, orientar e representar em todas as demandas judiciais e extrajudiciais.
          </p>

          <span className="sobres3_pergunta">Minha empresa é pequena, vale a pena?</span>
          <p className="sobres3_text">
          Empresas em fase inicial necessitam de acompanhamento jurídico para se estruturarem adequadamente e evitarem problemas futuros.
          </p>

          <span className="sobres3_pergunta">Quais benefícios?</span>
          <p className="sobres3_text">
          Evitar demandas processuais que demoram, causam estresse e oneram o Empresário, te ajuda em todas as tomadas de decisões. Ter Assessoria é como fazer um seguro da sua empresa!
          </p>
        </div>

        <div className="sobres3_image">
          <img src="https://placehold.co/455x539.png" alt="" />
        </div>
      </div>
    </section>
  )
}