class Estudante{
    nome;
    #ra;
    #cpf;

    construtor(nome, cpf, ra){
        this.nome = nome;
        this.#cpf = cpf;
        this.#ra = ra;
    }
}

const Destaque = new Estudante('Kelvin Alessandro Estaque Nunes' , 3222, 57751314877);
console.log(Destaque);