import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Cria uma matriz 2x2 (2 linhas e 2 colunas) inicializada com zeros
const matriz = Array.from({ length: 2 }, () => Array(2).fill(0));

// Variável para acumular o resultado da soma
let somaTotal = 0;

console.log("=== DIGITE OS VALORES DA MATRIZ 2x2 ===");

// Estrutura para receber os dados do usuário via terminal
for (let i = 0; i < 2; i++) {       // 'i' controla as linhas (0 e 1)
  for (let j = 0; j < 2; j++) {     // 'j' controla as colunas (0 e 1)
    matriz[i][j] = Number(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
  }
}

// Estrutura para processar a soma de todos os elementos
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    somaTotal += matriz[i][j];      // Adiciona o valor da posição atual à variável acumuladora
  }
}

console.log("\n=== RESULTADOS ===");
console.log("Matriz digitada:");
console.table(matriz);              // Desenha a matriz em formato de tabela no terminal

console.log(`A soma de todos os elementos é: ${somaTotal}`);
