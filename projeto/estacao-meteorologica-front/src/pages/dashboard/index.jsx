import Header from '../../components/header'

export default function DashBoard(){
    return(
    <>
    <Header />
    <section className='cards'>
        <div className='card'>
            <h6>Temperatura</h6>
            <h2>32° C</h2>
        </div>
        <div className='card'>
            <h6>Umidade</h6>
            <h2>60%</h2>
        </div>
        <div className='card'>
            <h6>Pressão</h6>
            <h2>1013 hPa</h2>
        </div>
        <div className='card'>
            <h6>Vento</h6>
            <h2>12km</h2>
        </div>
    </section>

    <section className='graficos'>
        <h6>Gráficos</h6>
        <div>
           {/*colocar gráficos*/}
        </div>
    </section>

    <section className='tabela'>
        <h6>Leitura Receitas</h6>
        <table>
            <thead>
                <tr>
                    <th>Horário</th>
                    <th>Temp.</th>
                    <th>Umidade</th>
                    <th>vent</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12:00</td>
                    <td>45° C</td>
                    <td>50%</td>
                    <td>13km</td>
                </tr>
                <tr>
                    <td>5:47</td>
                    <td>19° C</td>
                    <td>75%</td>
                    <td>5km</td>
                </tr>
                <tr>
                    <td>18:00</td>
                    <td>33° C</td>
                    <td>55%</td>
                    <td>17km</td>
                </tr>
            </tbody>
        </table>
    </section>
    </>
    )
}
