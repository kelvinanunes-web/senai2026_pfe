class Bicicleta{
    #modelo = 'Barra Forte';
    #marca = 'Monark';
    #cor = 'roxo perolizado';
    #velocidadeMaxima = '35km/h';

    setModelo(valor){
        this.#modelo = valor;
    }
    getModelo(){
        return this.#modelo;
    }
   
    setMarca(valor){
        this.#marca = valor;
    }
    getMarca(){
        return this.#marca;
    }
   
    setCor(valor){
        this.#cor = valor;
    }
    getCor(){
        return this.#cor;
    }

    setVelocidadeMaxima(valor){
        if(valor >35){
            console.log("se passar a velocidade precisa de emplacamento!!!")
        }else{
            this.#velocidadeMaxima = valor;
        }
        this.#velocidadeMaxima = valor;
    }
    getVelocidadeMaxima(){
        return this.#velocidadeMaxima;
    }
};

const monark = new Bicicleta();

monark.setMarca('Monark');
console.log(monark.getMarca());
monark.setCor('verde');
console.log(monark.getCor());
monark.setModelo('Velox');
console.log(monark.getModelo());
monark.setVelocidadeMaxima(36);
console.log(monark.getVelocidadeMaxima());