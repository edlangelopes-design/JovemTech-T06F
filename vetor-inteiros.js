import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

// 1. Cria o vetor vazio para armazenar os 5 números inteiros
const numeros = [];

console.log("=== ENTRADA DE DADOS ===");
// 2. Algoritmo que lê os 5 valores inteiros
for (let i = 0; i < 5; i++) {
    // Usamos parseInt() para garantir que o número seja salvo como INTEIRO
    numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
}

console.log("\n=== EXIBIÇÃO DOS VALORES ===");
// 3. Algoritmo que exibe os valores na tela
for (let i = 0; i < 5; i++) {
    console.log(`Posição ${i}: ${numeros[i]}`);
}   
