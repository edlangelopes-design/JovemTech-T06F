// Algoritmo "300 Primeiros Números Pares com Enquanto"
let resultado = "";
let contadorDePares = 0;
let i = 1; // Inicializa o contador do loop

// Executa ENQUANTO o número i for menor ou igual a 300
while (i <= 300) {
  // Verifica se o número é par (resto da divisão por 2 é igual a 0)
  if (i % 2 === 0) {
    resultado += i + " ";
    contadorDePares++;

    // Se exibiu 10 números pares, quebra a linha
    if (contadorDePares % 10 === 0) {
      resultado += "\n";
    }
  }
  
  i++; // Incrementa o contador para avançar no loop
}

console.log(resultado);
