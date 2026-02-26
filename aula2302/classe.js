class Carro{
    //atributos
    modelo = 'S10 cabine dupla';
    marca = 'chevrolet';
    ano = 2025;
    preco = 200000;

    //métodos
    mover(){
        consol.log('estou me movendo');
    }
    mostrar(){
        console.log('O carro é: ' + this.modelo + this.marac + this.ano + ' ' + this.preco);

    }
}
const Caminhonete = new Carro(); //instanciar a class
Caminhonete.mover(); //ultilizar métodos
Caminhonete.mostrar();
