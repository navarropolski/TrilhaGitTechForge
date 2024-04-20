const prompt= require("prompt-sync")();

let minhaString = "Hello World! Esta é uma string de exemplo.";
console.log("Comprimento da string:", minhaString.length);

let stringMaiuscula = minhaString.toUpperCase();
console.log("String em maiúsculas:", stringMaiuscula);

let palavras = minhaString.split(" ");
console.log("Palavras da string:");
palavras.forEach(palavra => console.log(palavra));