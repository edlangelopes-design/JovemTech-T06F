// Importa e inicializa o pacote prompt-sync
import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });// Permite fechar com Ctrl + C
//const prompt = promptSync(); // Ignora o encerramento do Ctrl + C


// Simula a leitura da idade do usuário (substitua pelo valor que desejar)
let idade = prompt("Digite sua idade: ");

if (idade >= 16) {
    console.log("Você pode votar!");
} else {
    console.log("Você ainda não pode votar.");
}
