import "./styles/styles.css";

import React, { useState } from 'react'
import IngridLogo from './images/ingrid_logo.png';
import sendMail from "../../utils/sendMail";

import instagram from './images/icons/instagram.png';
import mail from './images/icons/mail.png';
import phone from './images/icons/phone.png';
import computer from './images/icons/computer.png';

export default function Footer() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async(e) => {
      e.preventDefault()
      if (!firstName || !lastName || !email || !phone || !message) {
          return alert("Todos os campos devem estar preenchidos.")
      }

      try {
          sendMail({ options: { name: `${firstName} ${lastName}`, email, phone, message } })
          alert("Sucesso ao enviar formulário.")
      } catch (error) {
          console.log(error)
          alert("Ocorreu um erro ao enviar o formulário.")
      }
  }

  return (
    <>
      <section id="footer" className="container-fluid g-0 sectionFooter">
        <div className="footerTitle">
          <div className="footerTitles">
            <h1 className="footerTitleLineOne">Marque uma consulta</h1>
            <h1 className="footerTitleLineTwo">Sem vínculos, sem custo</h1>
          </div>
        </div>

        <div className="footerFormulario">
          <div className="footerInputsRow">
            <input onChange={(e) => setFirstName(e.target.value)} className="footerInput" type="text" placeholder="Primeiro Nome" />
            <input onChange={(e) => setLastName(e.target.value)} className="footerInput" type="text" placeholder="Segundo Nome" />
          </div>

          <div className="footerInputsRow">
            <input onChange={(e) => setEmail(e.target.value)} className="footerInput" type="email" placeholder="Email" />
            <input onChange={(e) => setPhone(e.target.value)} className="footerInput" type="tel" placeholder="Telefone" />
          </div>

          <div className="footerTextArea footerInputsRow">
            <textarea onChange={(e) => setMessage(e.target.value)} name="message" id="message" className="footerInput footerTextarea" placeholder="Insira sua mensagem"/>
          </div>

          <div className="footerInputsRow"><button onClick={handleSubmit} className="footerButton">Enviar</button></div>
        </div>

      </section>

      {/*-------------------------------------------------------------------------*/}

      <footer className="footer">
        <div className="footerImage">
          <img className="footerImg" src={IngridLogo} alt="" />
        </div>

        <div className="footerRedesSociais">
          <div className="footerRedeDiv fInstagram">
            <img className="footerRedePng" src={instagram} alt="" />
            <span className="footerRedeText">@instagram_advogada</span>
          </div>
          <div className="footerRedeDiv fMail">
            <img className="footerRedePng" src={mail} alt="" />
            <span className="footerRedeText">exemplo@dominio.com</span>
          </div>
          <div className="footerRedeDiv fPhone">
            <img className="footerRedePng" src={phone} alt="" />
            <span className="footerRedeText">(99) 99999-9999</span>
          </div>
        </div>

        <div className="footerLine"></div> {/* --------------------------------------------- */}

        <div className="footerLinks">
          <ul className="footerList">
            <li><a className="footerLink footerLinkFirst" href="#">Início</a></li>
            <li><a className="footerLink" href="#">Sobre</a></li>
            <li><a className="footerLink" href="#">Serviços</a></li>
          </ul>
        </div>

        <div className="footerLine"></div> {/* --------------------------------------------- */}

        <div className="footerCreditos">
          <img className="computerPng" src={computer} alt="" />
          <span className="footerCreditosText">Desenvolvido por Alisson & Augusto</span>
        </div>

      </footer>
    </>
  );
}
