const prompt = require('prompt-sync')();

// Simula a leitura da idade do usuário (substitua pelo valor que desejar)
let idade = prompt("Digite sua idade: ");

if (idade >= 16) {
    console.log("Você pode votar!");
} else {
    console.log("Você ainda não pode votar.");
}
