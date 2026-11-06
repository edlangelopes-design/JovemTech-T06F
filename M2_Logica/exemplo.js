import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const notas = [];

for (let i = 0; i < 5; i++) {
    // Pede a nota e já guarda direto dentro do vetor
    notas[i] = Number(prompt(`Digite a nota ${i + 1}: `));
}
console.log("Notas guardadas:", notas);
