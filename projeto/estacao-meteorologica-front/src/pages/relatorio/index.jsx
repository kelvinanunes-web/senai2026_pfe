import Header from "../../components/header";
import "./relatorio.css";

export default function Relatorio() {
  const leituras = [
    { horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: "26°C", umidade: "67%" },
    { horario: "16:07", qualidadeAr: "Moderada", iqa: 42, temperatura: "30°C", umidade: "50%" },
    { horario: "6:07", qualidadeAr: "Muito boa", iqa: 42, temperatura: "23°C", umidade: "80%" },
    { horario: "18:07", qualidadeAr: "Moderada", iqa: 42, temperatura: "33°C", umidade: "47%" }
  ];

  return (
    <>
      <Header />

      <div className="container-relatorio">
        <h3>Relatório Estação Meteorológica</h3>
        <p>Monitoramento da temperatura e umidade em tempo real</p>

        <section className="graficos-relatorio">
          <h4>Gráficos</h4>
          <div className="grafico-box-relatorio">
            <p>Área reservada para gráficos</p>
          </div>
        </section>

        <section className="tabela-leituras">
          <h4>Leituras Registradas</h4>

          <table>
            <thead>
              <tr>
                <th>Horário</th>
                <th>Qualidade</th>
                <th>IQA</th>
                <th>Temperatura</th>
                <th>Umidade</th>
              </tr>
            </thead>

            <tbody>
              {leituras.map((item, index) => (
                <tr key={index}>
                  <td data-label="Horário">{item.horario}</td>
                  <td data-label="Qualidade">{item.qualidadeAr}</td>
                  <td data-label="IQA">{item.iqa}</td>
                  <td data-label="Temperatura">{item.temperatura}</td>
                  <td data-label="Umidade">{item.umidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}