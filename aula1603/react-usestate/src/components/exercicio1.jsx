import{ useState } from 'react';

export default function Calculadora({ titulo }){
   
    const[num, setNum] = useState(0)
    const[num2, setNum2] = useState(0)
    const[resultado, setResultado] = useState(0)

    function somar(e){
        e.preventDefault();
        setResultado(Number(num) + Number(num2))
        return resultado
    }

    function subtrair(e){
        e.preventDefault();
        setResultado(Number(num) - Number(num2))
        return resultado
    }

    function multiplicar(e){
        e.preventDefault();
        setResultado(Number(num) * Number(num2))
        return resultado
    }

    function dividir(e){
        e.preventDefault();
        setResultado(Number(num) / Number(num2))
        return resultado
    }

    function raiz(e){
        e.preventDefault();
        setResultado(Math.sqrt(Number(num)))
        return resultado
    }

    function potencia(e){
        e.preventDefault();
        setResultado(Number(num) ** Number(num2))
        return resultado
    }

    function limpar(e){
        e.preventDefault();
        setNum(0)
        setNum2(0)
        setResultado(0)
        return resultado
    }

    return(
    <>
        <h1>{titulo}</h1>
        <div>
            <form action="">
                <label htmlFor="numero1">Número 1</label>
                <input type="number" placeholder='0' value={num} onChange={(e) => setNum(e.target.value)}/>

                <label htmlFor="numero2">Número 2</label>
                <input type="number" placeholder='0' value={num2} onChange={(e) => setNum2(e.target.value)}/>

                <div className="botoes">
                <button onClick={somar}>Somar</button>
                <button onClick={subtrair}>Subtrair</button>
                <button onClick={multiplicar}>Multiplicar</button>
                <button onClick={dividir}>Divisão</button>
                <button onClick={raiz}>Raiz Quadrada</button>
                <button onClick={potencia}>Potência</button>
                <button onClick={limpar}>Limpar</button>
                </div>
                <h2 style={{color:'red'}}>Resultado: {resultado}</h2>
            </form>
        </div>
       
    </>
    )
}