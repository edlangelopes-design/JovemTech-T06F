import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

function encontrarMaiorTemperatura(matrizTemperaturas) {
  let maior = matrizTemperaturas[0][0];

  for (let i = 0; i < matrizTemperaturas.length; i++) {
    for (let j = 0; j < matrizTemperaturas[i].length; j++) {
      if (matrizTemperaturas[i][j] > maior) {
        maior = matrizTemperaturas[i][j];
      }
    }
  }
  return maior;
}

// 1. Criamos uma matriz 3x3 vazia para preencher com as respostas do usuário
const registroEstufa = [[], [], []];

// 2. Dois loops para pedir os dados de cada posição
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    // Pede a temperatura e já converte para número
    let dadoDigitado = prompt(`Digite a temperatura para o Dia ${i + 1}, Leitura ${j + 1}: `);
    
    registroEstufa[i][j] = Number(dadoDigitado);
  }
}

// 3. Mostra a matriz preenchida pelo usuário e calcula a maior
console.table(registroEstufa);
const temperaturaMaxima = encontrarMaiorTemperatura(registroEstufa);
console.log(`A maior temperatura digitada foi: ${temperaturaMaxima}`);
