import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const vetorOriginal = [];
const vetorInvertido = [];

console.log("=== ENTRADA DE DADOS ===");
// 1. Lê os 10 números inteiros
for (let i = 0; i < 10; i++) {
    vetorOriginal[i] = parseInt(prompt(`Digite o ${i + 1}º número: `));
}

// 2. Inverte o vetor manualmente jogando os valores no novo vetor
for (let i = 9; i >= 0; i--) {
    vetorInvertido.push(vetorOriginal[i]);
}

console.log("\n=== RESULTADO ===");
console.log("Vetor original: ", vetorOriginal);
console.log("Vetor invertido:", vetorInvertido);
