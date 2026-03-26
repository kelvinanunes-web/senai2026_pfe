import {useContext} from "react";
import { ContextoTema } from "../contexts/temaContexto";

export default function Header(){
    const {tema, mudarTema} = useContext(ContextoTema);

    return(
        <>
            <header className={`header-${tema}`} >
                <h1>Meu primeiro site com Tema de Contexto</h1>
                <button onClick={mudarTema}>
                    Mudar Tema para {tema === 'light' ? 'escuro' : 'claro'}
                </button>
            </header>
           
            <section className={`noticias-${tema}`}>
                <h2>Últimas Notícias</h2>

                <div className="cards">
                    <div className="card">
                        <img src="https://s3.sa-east-1.amazonaws.com/static.activodeporte.com/brasil/uploads/2022/11/10131456/male-soccer-football-player-training-in-action-isolated-on-gradient-studio-in-neon-light-1-690x515.jpg" alt="Notícia 1" />
                        <h3>Inovação no esporte</h3>
                        <p>Tecnologia melhora desempenho de atletas profissionais.</p>
                    </div>

                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCC3H3jhjDr47OZp5CEjmj62Hm6iS-fMgdA&s" alt="Notícia 2" />
                        <h3>Tecnologia avança em 2026</h3>
                        <p>Novas tendências em IA estão transformando o mercado global.</p>
                    </div>

                    <div className="card">
                        <img src="https://lh7-us.googleusercontent.com/OTAj3_arkkVj7wlDpWovqngMbuVUHQxEbvgJ7P-YU_mfZzr11Lp7K2630V2hFARaXYnOi6lIlyLIK2xpjyaTY3UZ6-u3hRX90RY4SheZQ2Gpf5vGIgvlxAoddvr2FXNKM37tQ_GTyxtqkQCD3kUk8UA" alt="Notícia 3" />
                        <h3>Mercado financeiro em alta</h3>
                        <p>Bolsa apresenta crescimento significativo neste trimestre.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
