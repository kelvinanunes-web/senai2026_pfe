import { useState, useEffect } from "react";

export default function ConectaAPI() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        setUsuario(data.results[0]);
      })
      .catch(error => console.error("Erro:", error));
  }, []);

  return (
    <>
      <h1>Usuário Aleatório</h1>
      {usuario && (
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWDjFeisqIdikl-JOqeDO9d4PNbEd1rc1XA&s" alt="avatar" />
          <p>Nome: {usuario.name.first} {usuario.name.last}</p>
          <p>Email: {usuario.email}</p>
          <p>País: {usuario.location.country}</p>
        </div>
      )}
    </>
  );
}