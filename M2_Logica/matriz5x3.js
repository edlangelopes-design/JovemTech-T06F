import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Cria uma matriz 5x3 (5 linhas e 3 colunas) inicializada com zeros
/*const matriz = [
    [0, 0, 0], // Linha 0
    [0, 0, 0], // Linha 1
    [0, 0, 0], // Linha 2
    [0, 0, 0], // Linha 3
    [0, 0, 0]  // Linha 4
];*/

// Cria uma matriz 5x3 inicializada com zeros de forma automática
const matriz = Array.from({ length: 5 }, () => Array(3).fill(0));

//console.table(matriz);

console.log("Digite os elementos da matriz (5x3):");

// Loop para percorrer as 5 linhas (0 a 4)
for (let i = 0; i < 5; i++) {
  // Loop para percorrer as 3 colunas (0 a 2)
  for (let j = 0; j < 3; j++) {
    // Pede o valor para o usuário e converte para número
    matriz[i][j] = Number(prompt(`Elemento [${i + 1},${j + 1}]: `));
  }
}

console.log("\nMatriz Digitada:");

// Mostrando a matriz linha por linha
for (let i = 0; i < 5; i++) {
  let linhaTexto = "";
  
  for (let j = 0; j < 3; j++) {
    linhaTexto += matriz[i][j] + " ";
  }
  
  console.log(linhaTexto); // Imprime a linha inteira e pula para a próxima
}
