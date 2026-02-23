const prompt = require('prompt-sync')();



let  Nascimento = Number(prompt("Digite seu ano de nascimento: "));
const anoAtual = new Date().getFullYear();

const idade = anoAtual - Nascimento

console.log("Você tem " + idade + " anos.");