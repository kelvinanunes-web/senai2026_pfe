const prompt = require('prompt-sync')();
let num = Number(prompt("Digite o primeiro número:"));
if (num %2 == 0){
console.log("O numero é par")
}
else {console.log ('O numero é impar')
}