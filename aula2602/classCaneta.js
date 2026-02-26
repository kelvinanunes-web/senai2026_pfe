class Caneta {
    //atributos publicos
    cor = "Azul";
    marca = "Bic";
    ponta = "Fina";
    qtdTinta = 5;
    tampa = true;

    //metodo tem parenteses
    escrever(){
        return 'Começou a escrever'
    }
    sublinhar (valor){
        if(valor > this.quantidadeTinta){
            console.log("Não é possível escrever")
        }
        else {this.quantidadeTinta -= valor
        return 'Quantidade restante de tinta atual é ' + this.quantidadeTinta
        }
    }
}
const canetaFina = new Caneta
canetaFina.escrever();
console.log(canetaFina.escrever())
console.log(canetaFina.sublinhar(2));