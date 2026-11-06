import readline from 'readline';
//const readline = require('readline');

// Seu vetor de alimentos com acentos
const alimentos = ['feijão', 'arroz', 'maçã', 'café', 'pão', 'abóbora'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome de um alimento: ', (resposta) => {
  // 1. Remove espaços extras e padroniza para letras minúsculas
  const termoBuscado = resposta.trim().toLowerCase();

  // 2. Normaliza e busca no array
  const encontrado = alimentos.find(alimento => {
    return alimento.toLowerCase().normalize('NFC') === termoBuscado.normalize('NFC');
  });

  // 3. Exibe o resultado
  if (encontrado) {
    console.log(`✅ Sucesso! O alimento "${encontrado}" foi encontrado no vetor.`);
  } else {
    console.log(`❌ O alimento "${resposta}" não está no vetor.`);
  }

  rl.close();
});
