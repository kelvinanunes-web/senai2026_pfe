class Jogador { //classe mãe
    #nome;
    #numero
    constructor(nome, numero){
        this.#nome = nome
        this.#numero = numero
    }
    treinar(){
        return '3 vezes na semana'
    }
    getNome(){
        return this.#nome
    }
    getNumero(){
        return this.#numero
    }
}

 //classe jogadorFutebol - filha
 class JogadorFutebol extends Jogador{
    #peDominate
    #totalGols
    constructor(peDominante, totalGols, nome, numero){
        super(nome, numero);
        this.#peDominate = peDominante
        this.#totalGols = totalGols
    }
    driblar(){
        return 'Tomou uma caneta'
    }
    fazerGol(qtsGols){
        return this.#totalGols += qtsGols
    }
    //super acessa atributos e métodos da classe mãe
    mostrar(){
        return 'O jogador ' + super.getNome() + ' número ' + super.getNumero() + ' pé dominante ' + this.#peDominate + ' tem ' + this.#totalGols + ' gols '
    }
}
class JogadorFutebolAmericano extends Jogador {
    #listaJogadas;
    #jardasConquistadas;

    constructor(nome, numero, listaJogadas, jardasConquistadas){
        super(nome, numero)
        this.#listaJogadas = listaJogadas
        this.#jardasConquistadas = jardasConquistadas
    }
    fazerTouchDown(){
        return 'O jogador ' + super.getNome() + ' numero ' + super.getNumero() + " marcou um Touchdown!!!"
    }
    bloquear(){
        return 'O jogador realizou um bloqueio'
    }
    correrJardas(valor){
        return this.jardasConquistadas+=valor
    }
 }
 class JogadorBasquete extends Jogador {
    #alturaSalto;
    #totalCestas;
    constructor(nome, numero, alturaSalto, totalCestas){
        super(nome, numero)
        this.#alturaSalto = alturaSalto
        this.#totalCestas = totalCestas
    }
    arremessar (){
        return 'O jogador ' + super.getNome() + ' numero ' + super.getNumero() + " realizou um arremesso!!!"
    }
    fazerEnterrada(){
        return 'O jogador fez uma enterrada'
    }
 }

 const jogador = new JogadorFutebol('esquerdo', 20, 'Kelvin Destaque', 7)
 jogador.fazerGol(2 );
 console.log(jogador.mostrar())

const jogadorNFL = new JogadorFutebolAmericano("Raimundo", 67);
console.log(jogadorNFL.fazerTouchDown());

const jogadorNBA = new JogadorBasquete("Adelio", 100);
console.log(jogadorNBA.arremessar());
