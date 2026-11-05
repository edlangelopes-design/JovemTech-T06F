import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Matriz original 3x3 preenchida com valores sequenciais
const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Cria uma nova matriz 3x3 vazia cheia de zeros para guardar o resultado
const matrizTransposta = Array.from({ length: 3 }, () => Array(3).fill(0));

// Estrutura de repetição para fazer a transposição dos dados
for (let i = 0; i < 3; i++) {       // 'i' representa as linhas da matriz original
  for (let j = 0; j < 3; j++) {     // 'j' representa as colunas da matriz original
    // A mágica acontece aqui: a linha e coluna se invertem na atribuição
    matrizTransposta[j][i] = matrizOriginal[i][j];
  }
}
console.log("=== MATRIZ ORIGINAL ===");
console.table(matrizOriginal);
console.log("\n=== MATRIZ TRANSPOSTA ===");
console.table(matrizTransposta);
