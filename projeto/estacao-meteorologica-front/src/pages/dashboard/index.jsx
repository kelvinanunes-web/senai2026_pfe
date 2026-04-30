import Header from "../../components/header";
import  "./dashboard.css"; 
import GraficoBarra from "../../components/graficoBarra";

export default function DashBoard() {
  return (
    <>
      <Header />

      <section className="cards">
        <div className="card">
          <h6>Temperatura</h6>
          <h2>32° C</h2>
        </div>

        <div className="card">
          <h6>Umidade</h6>
          <h2>60%</h2>
        </div>

        <div className="card">
          <h6>Pressão</h6>
          <h2>1013 hPa</h2>
        </div>

        <div className="card">
          <h6>Vento</h6>
          <h2>12km</h2>
        </div>
      </section>

      <section className="graficos">
        <h6>Gráficos</h6>
        <div>
          <GraficoBarra />
        </div>
      </section>

      <section className="tabela">
        <h6>Leitura Receitas</h6>

        <table>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Temp.</th>
              <th>Umidade</th>
              <th>Vent</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td data-label="Horário">12:00</td>
              <td data-label="Temp.">45° C</td>
              <td data-label="Umidade">50%</td>
              <td data-label="Vent">13km</td>
            </tr>

            <tr>
              <td data-label="Horário">5:47</td>
              <td data-label="Temp.">19° C</td>
              <td data-label="Umidade">75%</td>
              <td data-label="Vent">5km</td>
            </tr>

            <tr>
              <td data-label="Horário">18:00</td>
              <td data-label="Temp.">33° C</td>
              <td data-label="Umidade">55%</td>
              <td data-label="Vent">17km</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}