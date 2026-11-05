// Algoritmo "300 Primeiros Números Ímpares com Enquanto"
let resultado = "";
let contadorDeImpares = 0;
let i = 1; // Inicializa o número a ser testado

// CORRIGIDO: Executa ENQUANTO não encontrarmos os 300 números ímpares
while (contadorDeImpares < 300) {
  // Verifica se o número atual é ímpar
  if (i % 2 !== 0) {
    resultado += i + " ";
    contadorDeImpares++;

    // Se exibiu 10 números ímpares, quebra a linha
    if (contadorDeImpares % 10 === 0) {
      resultado += "\n";
    }
  }
  
  i++; // Avança para o próximo número (2, 3, 4...)
}

console.log(resultado);