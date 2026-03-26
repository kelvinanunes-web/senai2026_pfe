const frutas = ["jabuticaba", "Banana", "laranja", "Abacaxi", "ameixa"];

export default function ListaFrutas ({titulo}) {
    const listaFrutas = frutas.map((fruta) => {
        return <li>
            <h3>{fruta}</h3>
        </li>
    });
    return(
        <>
            <h1>{titulo}</h1>
            <ul>
                {listaFrutas}
            </ul>
        </>
    )
}
