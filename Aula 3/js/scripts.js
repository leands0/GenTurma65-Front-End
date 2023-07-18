function helloWorld(){
    alert("Hello World");
 };

// VAR = Escopo Global
// LET = Escopo Local
// CONST = Escopo Global

let nome = document.getElementById("nome")

function enviar(){
    alert("Olá " + nome.value)
}