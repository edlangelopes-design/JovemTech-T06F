import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const numeros = [];
let totalPares = 0;
let totalImpares = 0;

console.log("=== ENTRADA DE DADOS ===");
// 1. Laço para ler os 6 números inteiros
for (let i = 0; i < 6; i++) {
    numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    
    // 2. Verifica se o número atual é par ou ímpar e atualiza os contadores
    if (numeros[i] % 2 === 0) {
        totalPares++; // Soma 1 ao contador de pares
    } else {
        totalImpares++; // Soma 1 ao contador de ímpares
    }
}

console.log("\n=== RESULTADO TOTAL ===");
console.log("Números digitados:", numeros);
console.log(`Quantidade de números PARES: ${totalPares}`);
console.log(`Quantidade de números ÍMPARES: ${totalImpares}`);

