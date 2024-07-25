import Card from "../../Card";
import "./Styles/index.css";
import image2 from "./Images/image2.svg";
import image1 from "./Images/image1.svg";
import image3 from "./Images/image3.svg";
import image4 from "./Images/image4.svg";
import image5 from "./Images/image5.svg";
import image6 from "./Images/image6.png";
import image7 from "./Images/image7.svg";
import image8 from "./Images/image8.svg";

function Section2() {
  return (
    <section className="container-fluid section2">
      <div className="section2Titulo">
        <h1 id="section2titulo">ESPECIALIDADES</h1>
      </div>
      <div className="containerGrid">
        <Card
          img={image2}
          title="Registro de Marca"
          desc="Proteja a identidade do seu negócio com o registro de marca. Nossa equipe especializada garante que seu patrimônio intelectual esteja seguro e em conformidade com as leis vigentes.
"
        />
        <Card
          img={image1}
          title="Recuperação de Contas"
          desc="Perdeu o acesso às suas contas online? Nós ajudamos a recuperar contas de e-mail, redes sociais e outras plataformas digitais, com total segurança e confidencialidade."
        />
        <Card
        img={image5}
          title="Golpes Digitais"
          desc="Foi vítima de golpes digitais? Atuamos na identificação e mitigação de fraudes online, protegendo seus direitos e recuperando possíveis prejuízos."
        />
        <Card
        img={image8}
          title="Assessoria Jurídica"
          desc="Oferecemos assessoria jurídica personalizada para indivíduos e empresas, orientando e representando nossos clientes em diversas áreas do direito."
        />
        <Card
        img={image6}
          title="Cível"
          desc="Atuamos em litígios civis, buscando soluções eficazes para conflitos de direito de família, sucessões, contratos e outras demandas civis."
        />
        <Card
          img={image3}
          parceria={true}
          title="Trabalhista"
          desc="Em parceria com especialistas na área trabalhista, oferecemos suporte completo em questões relacionadas a direitos e deveres trabalhistas, tanto para empregadores quanto para empregados."
        />
        <Card
          img={image7}
          parceria={true}
          title="Previdenciário"
          desc="Com a colaboração de profissionais qualificados, fornecemos consultoria e representação em assuntos previdenciários, assegurando o acesso aos benefícios de forma justa e eficiente."
        />
        <Card
          img={image4}
          parceria={true}
          title="Empresarial"
          desc="Aliados a consultores empresariais experientes, auxiliamos na gestão jurídica de empresas, oferecendo soluções estratégicas para o crescimento e proteção do seu negócio."
        />
      </div>
    </section>
  );
}

export default Section2;
