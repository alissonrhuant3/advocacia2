import React, { useState } from 'react'
import "./Styles/index.css";
import sendMail from '../../../utils/sendMail';

function Section1() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!name || !email || !phone || !message) {
            return alert("Todos os campos devem estar preenchidos.")
        }

        try {
            sendMail({ options: { name, email, phone, message } })
            alert("Sucesso ao enviar formulário.")
        } catch (error) {
            alert("Ocorreu um erro ao enviar o formulário.")
        }
    }

    return(
        <section className="container-fluid sectionPai">
            <div className="sectionPai__tituloesubtitulo">
                <p>Teve sua conta bloqueada?</p>
                <h3>NÓS <br />TEMOS A <br />SOLUÇÃO <br />PARA VOCÊ!</h3>
            </div>
            <div className="sectionPai__formulario">
                <div className="sectionPai__formulario_borda">
                    <form className="sectionPai__formulario_formulario">
                        <input onChange={(e) => setName(e.target.value)} className="inputs" type="text" name="nome" id="nome" placeholder="NOME COMPLETO"></input>
                        <div className="doisInputs">
                            <input onChange={(e) => setEmail(e.target.value)} className="inputs inputs_" type="email" name="email" id="email" placeholder="E-MAIL"></input>
                            <input onChange={(e) => setPhone(e.target.value)} className="inputs inputs_" type="tel" name="telefone" id="telefone" placeholder="TELEFONE"></input>
                        </div>
                        <textarea onChange={(e) => setMessage(e.target.value)} rows={4} className="inputs inputTextArea" name="mensagem" id="mensagem" placeholder="MENSAGEM" />
                        <button onClick={handleSubmit} className="inputs button" type="submit">ENVIAR</button>
                    </form>
                </div> 
            </div>
        </section>
    );
}

export default Section1;