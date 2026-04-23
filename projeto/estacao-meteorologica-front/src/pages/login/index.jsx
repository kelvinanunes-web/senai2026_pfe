import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <section className="login-container">
      <div className="login-box">
        
        <div className="login-left">
          <h1>Bem-vindo!</h1>
          <h2>Curiosidade</h2>
          <p>ângelo primeiro homem a ter um dinossáuro de estimação</p>
        </div>

        <div className="login-right">
          <h2>Login</h2>

          <form>
            <div className="input-group">
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
              <label htmlFor="usuario">Usuário</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <label htmlFor="senha">Senha</label>
            </div>

            <Link to='/dashboard' className="btn-login">Entrar</Link>

            <p><Link to="/register" className="link-secondary" link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover>Não tem conta? Cadastre-se</Link></p>
          </form>
        </div>

      </div>
    </section>
  );
}