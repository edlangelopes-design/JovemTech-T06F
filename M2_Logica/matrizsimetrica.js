import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Cria uma matriz quadrada 3x3 inicializada com zeros
const matriz = Array.from({ length: 3 }, () => Array(3).fill(0));

console.log("=== PREENCHENDO A MATRIZ 3x3 ===");

// Estrutura para receber os 9 valores do usuário via terminal
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = Number(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
  }
}

// Variável de controle para registrar se a matriz continua simétrica durante o teste
let ehSimetrica = true;

// Estrutura para comparar os elementos espelhados da matriz
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    // Compara se o elemento atual [i][j] é diferente do seu correspondente transposto [j][i]
    if (matriz[i][j] !== matriz[j][i]) {
      ehSimetrica = false; // Se encontrar uma única diferença, muda para falso
      break;               // Interrompe o loop interno para economizar processamento
    }
  }
  if (!ehSimetrica) {
    break; // Interrompe o loop externo caso a assimetria já tenha sido detectada
  }
}

console.log("\n=== ANÁLISE DA MATRIZ ===");
console.table(matriz); // Desenha a tabela com os números digitados

// Condicional simples para imprimir o veredito final
if (ehSimetrica) {
  console.log("RESULTADO: A matriz digitada É SIMÉTRICA!");
} else {
  console.log("RESULTADO: A matriz digitada NÃO É SIMÉTRICA.");
}
