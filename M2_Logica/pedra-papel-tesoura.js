const prompt = require('prompt-sync')();

// 1. O jogador escolhe sua jogada
let escolhaJogador = prompt("Escolha: pedra, papel ou tesoura: ").toLowerCase();

// 2. O computador escolhe aleatoriamente
const opcoes = ["pedra", "papel", "tesoura"];
const numeroAleatorio = Math.floor(Math.random() * 3);
const escolhaComputador = opcoes[numeroAleatorio];

// Mensagem informando as escolhas
prompt("Você escolheu: " + escolhaJogador + "\nO computador escolheu: " + escolhaComputador);

// 3. Lógica do jogo usando IF, ELSE IF e operadores lógicos
if (escolhaJogador === escolhaComputador) {
    prompt("👔 Empate! Ambos escolheram a mesma coisa.");
} 
else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
) {
    prompt("🎉 Você ganhou! " + escolhaJogador + " ganha de " + escolhaComputador + ".");
} 
else if (
    escolhaJogador === "pedra" || 
    escolhaJogador === "papel" || 
    escolhaJogador === "tesoura"
) {
    prompt("😢 Você perdeu! " + escolhaComputador + " ganha de " + escolhaJogador + ".");
} 
else {
    prompt("❌ Escolha inválida! Digite apenas 'pedra', 'papel' ou 'tesoura'.");
}