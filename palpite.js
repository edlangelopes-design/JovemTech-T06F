const prompt = require('prompt-sync')();

// O computador escolhe um número secreto entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// O jogador insere um palpite
let palpite = prompt("Tente adivinhar o número secreto entre 1 e 10:");

// Transforma o texto digitado em um número inteiro
palpite = parseInt(palpite);

// Lógica do jogo utilizando estruturas IF para tomar decisões
if (palpite === numeroSecreto) {
    prompt("🎉 Parabéns! Você acertou o número secreto!");
} else if (palpite > numeroSecreto) {
    prompt("📉 Quase! Seu palpite foi maior do que o número secreto.");
} else if (palpite < numeroSecreto) {
    prompt("📈 Quase! Seu palpite foi menor do que o número secreto.");
} else {
    prompt("❌ Entrada inválida. Você digitador um número válido?");
}
