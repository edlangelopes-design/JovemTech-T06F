// Função que recebe QUALQUER matriz e soma seus valores
function somarElementosMatriz(matrizParaSomar) {
  let somaTotal = 0;

  for (let i = 0; i < matrizParaSomar.length; i++) {
    for (let j = 0; j < matrizParaSomar[i].length; j++) {
      somaTotal += matrizParaSomar[i][j]; // Soma o número atual ao total
    }
  }
  return somaTotal; // Retorna o resultado final
}

// Criando uma matriz de teste
const minhaMatriz = [[1, 5],[3, 4],[5, 8]];

// Chamando a função e exibindo o resultado
let resultadoDaSoma = somarElementosMatriz(minhaMatriz);
console.log("A soma de todos os números é:", resultadoDaSoma); 
console.table(minhaMatriz); //imprime a tabela da matriz no console de forma organizada