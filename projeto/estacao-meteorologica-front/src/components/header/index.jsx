import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header-container">
      <h2 className="header-logo">Estação Meteorológica</h2>

      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/relatorio">Relatório</Link>
          </li>
          <li>
            <Link to="/">Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}