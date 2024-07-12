import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/index.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid g-0">
      {/* Início Navbar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#100F0D" }}
      >
        <div className="container-fluid">
          <div className="nomePrincipal ms-3 mt-1">
          <a class="navbar-brand" href="#">
            <img id="logo" src={logo} alt="Logo " />
          </a>
          </div>
          <button
            className="navbar-toggler"
            type="butFton"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto m-2 mb-2">
                <li className="nav-item pe-5">
                <Link className="nav-link active" to='/'>Inicio</Link>
                </li>
                <li className="nav-item pe-5">
                <Link className="nav-link active" to='/sobre'>Sobre</Link>
                </li>
                <li className="nav-item pe-5">
                  <Link className="nav-link active" to='/servicos'>Serviços</Link>
                </li>
                <li className="nav-item pe-5">
                  <a className="nav-link active" aria-current="page" href="#footer">
                    Contato
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
      {/* Fim Navbar */}
    </div>
  );
}

export default Navbar;
