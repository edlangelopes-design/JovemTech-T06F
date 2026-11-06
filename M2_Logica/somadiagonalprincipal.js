import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Cria uma matriz 3x3 inicializada com zeros
const matriz = Array.from({ length: 3 }, () => Array(3).fill(0));

// Variável para acumular a soma da diagonal
let somaDiagonal = 0;

console.log("=== PREENCHENDO A MATRIZ 3x3 ===");

// Estrutura para ler os 9 valores informados pelo usuário
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = Number(prompt(`Digite o valor para [${i + 1}][${j + 1}]: `));
  }
}

// FORMA OTIMIZADA: Usamos apenas 1 laço de repetição para somar a diagonal
// Em vez de olhar a matriz toda, vamos direto nas posições onde a linha e a coluna são iguais
for (let i = 0; i < 3; i++) {
  somaDiagonal += matriz[i][i]; // Soma as posições [0][0], [1][1] e [2][2]
}

console.log("\n=== MATRIZ DIGITADA ===");
console.table(matriz);

console.log(`Soma dos elementos da Diagonal Principal: ${somaDiagonal}`);
