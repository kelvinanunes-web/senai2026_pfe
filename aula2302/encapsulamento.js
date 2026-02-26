class Pessoa{
    nome;//atributo público
    #cpf = '00100200304';

    //métodos getter e stter 
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
}

const kelvin = new Pessoa;
estudante.nome = 'Kelvin Destaque';
estudante.setCpf(22222222220);
console.log('O cpf ' + estudante.getCpf());
console.log(estudante.nome);