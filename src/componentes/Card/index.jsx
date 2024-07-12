import "./Styles/index.css";
import image from "./imagensTeste/image.png";

export default function Card({ title, desc }) {
    return (
        <>
            <div className="g-0">
                    <div className="containerGrid_card">
                        <div className="containerGrid_card_icon"> <img style={{width: 100, height: 100}} src={image} alt={"Imagem: " + title}/></div>
                        <div className="containerGrid_card_icon_titulo"><p id="titulo">{title}</p></div>
                        <div className="containerGrid_card_descricao">
                            <p id="descricao">{desc}</p>
                        </div>
                </div>  
            </div>
        </>
    )
}
