const prompt = require ('prompt-sync')()

let idade = Number (prompt("Digite a sua idade"));
function idadeparalivros(){
if (idade>=18) {
    console.log("Você pode pegar livros e também é maior de idade")
}else if(idade >=16) {
    console.log("Você pode pegar livro mas não é maior de idade")
}else {
    console.log("Você não pode pegar livros, pois não tem a idade necessário para pegar")
}
}
idadeparalivros()