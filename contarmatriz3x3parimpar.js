import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Cria uma matriz 3x3 (3 linhas e 3 colunas) inicializada com zeros
const matriz = Array.from({ length: 3 }, () => Array(3).fill(0));

// Variáveis contadoras que começam em zero
let pares = 0;
let impares = 0;

console.log("=== PREENCHENDO A MATRIZ 3x3 ===");

// Estrutura para receber os 9 números do usuário via terminal
for (let i = 0; i < 3; i++) {       // 'i' controla as linhas (0, 1 e 2)
  for (let j = 0; j < 3; j++) {     // 'j' controla as colunas (0, 1 e 2)
    matriz[i][j] = Number(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
  }
}

// Estrutura para percorrer a matriz e verificar cada número
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let numeroAtual = matriz[i][j];

    // O operador % pega o resto da divisão por 2. Se for 0, o número é par.
    if (numeroAtual % 2 === 0) {
      pares++;     // Incrementa 1 na contagem de pares
    } else {
      impares++;   // Incrementa 1 na contagem de ímpares
    }
  }
}

console.log("\n=== RESULTADO DA ANÁLISE ===");
console.table(matriz); // Exibe a matriz digitada em formato de tabela

console.log(`Quantidade de números PARES  : ${pares}`);
console.log(`Quantidade de números ÍMPARES: ${impares}`);
