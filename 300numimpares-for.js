// Algoritmo: 300 Primeiros Numeros Impares com Quebra
let resultado = "";
let contadorDeImpares = 0;

// CORRIGIDO: O loop roda ate o contador de impares chegar a 300
// Comeca no 1 e pula de 2 em 2 (1, 3, 5, 7...)
for (let i = 1; contadorDeImpares < 300; i += 2) {
  resultado += i + " ";
  contadorDeImpares++;

  // Quando encontrar 10 numeros impares, quebra a linha
  if (contadorDeImpares % 10 === 0) {
    resultado += "\n";
  }
}

// Imprime o resultado final formatado
console.log(resultado);
