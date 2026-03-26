import './App.css'
import logoSesi from './assets/img/sesi.jpg'
import logoSenai from './assets/img/senai.png'


export default function App() {

  return (
<>
    <div className="container">
    <img src= {logoSesi} alt="Logo do SESI" className="logo" />
    <img src= {logoSenai} alt="Logo do SENAI" className="logo" />

    <h1 className="titulo">Login</h1>
    <spam className="subtitulo">para continuar</spam>

    <label htmlFor="nome" className="label">Nome</label>
    <input type="text" className="campo" id ="nome" placeholder='Seu nome'/>
    <label htmlFor="nome" className="label">Senha</label>
    <input type="text" className="campo" id ="senha" placeholder='****'/>

    <button className="botao">Log in</button>

    <a className="textoFouter">Esqueceu a senha?</a>
    <a className="textoFouter">Cadastre-Se</a>
   </div>
   
 </>
  )
}