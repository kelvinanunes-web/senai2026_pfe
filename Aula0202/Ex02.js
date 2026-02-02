const prompt = require('prompt-sync')();
let num = Number(prompt("Digite o primeiro número:"));
let sinal = prompt("Digite um sinal:");
let num2 = Number(prompt("Digite o segundo número:"));

const subtrair = (num,num2) => {
    console.log("A subtração dos números é: "+(num - num2));
}
const adicionar = (num,num2) => {
    console.log("A adição dos números é: "+(num + num2));
}
const multiplicar = (num,num2) => {
    console.log("A multiplicação dos números é: "+(num * num2));
}
const dividir = (num,num2) => {
    console.log("A divisão dos números é: "+(num / num2));
}

switch (sinal) {
    case " + ": adicionar(num,num2);
    break
    case  " - ": subtrair(num,num2);
    break
    case " * ":multiplicar(num,num2);
    break
    case " / ":dividir(num,num2);
    break
    default:console.log("Erro meu camarada")
}
resultado(num, sinal, num2);
console.log(resultado);