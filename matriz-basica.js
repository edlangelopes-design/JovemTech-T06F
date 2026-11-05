import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// var M: vetor[1..3,1..3] de inteiro
const M = [
    [0, 0, 0, 0], // Linha 0
    [0, 0, 0, 0], // Linha 1
    [0, 0, 0, 0]  // Linha 2
];


// i, j, soma: inteiro
let soma = 0; // soma <- 0

// Preenchimento da matriz 3x3 com valores de 1 a 9
M[0][0] = 1;
M[0][1] = 2;
M[0][2] = 3;
M[1][0] = 4;
M[1][1] = 5;
M[1][2] = 6;
M[2][0] = 7;
M[2][1] = 8;
M[2][2] = 9;

// Cálculo da soma de todos os elementos
for (let i = 0; i < 3; i++) {       // para i de 1 ate 3 faca
  for (let j = 0; j < 3; j++) {     // para j de 1 ate 3 faca
    soma = soma + M[i][j];          // soma <- soma + M[i,j]
  }
}

// Exibição da matriz original (linha por linha)
console.log("Matriz 3x3 original:"); // escreve("Matriz 3x3 original:")

for (let i = 0; i < 3; i++) {       // para i de 1 ate 3 faca
  let linhaTexto = "";              // Guarda os números da linha atual juntos
  
  for (let j = 0; j < 3; j++) {     // para j de 1 ate 3 faca
    linhaTexto += M[i][j] + " ";    // linhaTexto recebe os valores de M[i,j] seguidos de um espaço
  }
  
  console.log(linhaTexto);          // escreve linhaTexto -> pula linha no final
}

// Exibição da soma total
console.log("Soma total dos elementos: " + soma); // escreve("Soma total dos elementos: 45")

console.table(M); //imprime a tabela da matriz no console de forma organizada