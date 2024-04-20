const prompt= require("prompt-sync")();

const verificaNumero = (numero) => {
    console.log(numero % 2 === 0 ? numero + " é par." : numero + " é ímpar.");
};

verificaNumero(2); 
verificaNumero(3); 
verificaNumero(10); 
verificaNumero(15);