import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Definição das dimensões da matriz: 2 escolas x 3 alunos x 3 disciplinas
const totalEscolas = 2;
const totalAlunos = 3;
const totalDisciplinas = 3;

// Inicializa a matriz 3D preenchida com zeros
let notasGerais = Array.from({ length: totalEscolas }, () => 
  Array.from({ length: totalAlunos }, () => 
    Array(totalDisciplinas).fill(0)
  )
);

// Variáveis para calcular a média geral de todas as notas
let somaGeral = 0;
let contadorNotas = 0;

console.log("=== ENTRADA DE NOTAS DA MATRIZ ===");

// Loops para preenchimento da matriz tridimensional
for (let e = 0; e < totalEscolas; e++) {
  console.log(`\n--- Escola ${e + 1} ---`);
  for (let a = 0; a < totalAlunos; a++) {
    console.log(` Aluno ${a + 1}:`);
    for (let d = 0; d < totalDisciplinas; d++) {
      let nota = Number(prompt(`  Nota da Disciplina ${d + 1}: `));
      
      notasGerais[e][a][d] = nota;
      somaGeral += nota;      // Acumula o valor para a média global
      contadorNotas++;        // Conta a quantidade total de notas inseridas
    }
  }
}

console.log("\n=== RELATÓRIO DE NOTAS ===");

// Loops estruturados para gerar a saída exatamente no formato esperado
for (let e = 0; e < totalEscolas; e++) {
  console.log(`Escola ${e + 1}:`);
  
  for (let a = 0; a < totalAlunos; a++) {
    let linhaAluno = `  Aluno ${a + 1} - Notas: `;
    
    for (let d = 0; d < totalDisciplinas; d++) {
      let notaFinal = notasGerais[e][a][d];
      // Monta o texto de cada disciplina lado a lado com barras verticais
      linhaAluno += `Disc ${d + 1}: ${notaFinal.toFixed(1)} | `;
    }
    
    console.log(linhaAluno);
  }
  console.log(""); // Pula uma linha entre as escolas
}

// Calcula e exibe a média de todas as posições da matriz combinadas
let mediaGeral = somaGeral / contadorNotas;
console.log(`Média geral de todas as notas: ${mediaGeral.toFixed(2)}`);
