import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Cria uma matriz quadrada 4x4 (4 linhas e 4 colunas) preenchida com zeros
const matriz = Array.from({ length: 4 }, () => Array(4).fill(0));

// Variável de controle para gerar a sequência numérica inicial
let contador = 1; 

// Estrutura de repetição aninhada para preencher a matriz linha por linha
for (let i = 0; i < 4; i++) {       // 'i' representa a linha atual (0 a 3)
  for (let j = 0; j < 4; j++) {     // 'j' representa a coluna atual (0 a 3)
    matriz[i][j] = contador;        // Atribui o número atual à posição correspondente
    contador = contador + 1;        // Incrementa o valor para o próximo espaço
  }
}

// Mensagem informativa no terminal
console.log("Matriz 4x4 preenchida:"); 

// Estrutura para ler e exibir os dados organizados
for (let i = 0; i < 4; i++) {       
  let linhaTexto = "";              // Cria um texto vazio para acumular os dados da linha atual
  
  for (let j = 0; j < 4; j++) {     
    linhaTexto += matriz[i][j] + " "; // Junta os números lado a lado com um espaço
  }
  
  console.log(linhaTexto);          // Imprime a linha montada inteira e pula para a próxima
}
