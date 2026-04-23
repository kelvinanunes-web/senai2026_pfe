import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");

  return (
    <section className="register-container">
      <div className="register-box">
        
        <div className="register-left">
          <h1>Crie sua conta</h1>
          <p>Cadastre-se para acessar o sistema.</p>
        </div>

        <div className="register-right">
          <h2>Cadastro</h2>

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

            <div className="input-group">
              <input
                type="password"
                id="confSenha"
                value={confirmaSenha}
                onChange={(e) => setconfirmaSenha(e.target.value)}
                required
              />
              <label htmlFor="confSenha">Confirmar Senha</label>
            </div>

            <button className="btn-register">Registrar</button>

            <p><Link to="/" className="link-secondary" link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover>Já tem uma conta? Entre agora</Link></p>

          </form>
        </div>

      </div>
    </section>
  );
}