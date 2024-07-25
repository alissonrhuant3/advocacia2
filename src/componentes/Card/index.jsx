import "./Styles/index.css";

export default function Card({ title, desc, img, parceria }) {
    return (
        <>
            <div className="g-0">
                    <div className="containerGrid_card">
                        <div className="containerGrid_card_icon"> <img style={{width: 100, height: 100}} src={img} alt={"Imagem: " + title}/></div>
                        {parceria ? <div className="containerGrid_card_parceria">parceria</div> : ""}
                        <div className="containerGrid_card_icon_titulo">
                            <p id="titulo">{title}</p>
                        </div>
                        <div className="containerGrid_card_descricao">
                            <p id="descricao">{desc}</p>
                        </div>
                </div>  
            </div>
        </>
    )
}
