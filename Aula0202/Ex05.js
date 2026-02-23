const prompt = require("prompt-sync")();

let num = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if (n1 === 0 || num2 === 0) {
  console.log("Um dos números é zero");
} else if (num > num2) {
  console.log("O maior é:", num);
} else if (num2 > num) {
  console.log("O maior é:", num2);
} else {
  console.log("Os números são iguais");
}