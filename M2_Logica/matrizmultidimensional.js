import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Listas de apoio para sabermos os nomes correspondentes aos índices
const escolas = ["Escola Centro", "Escola Norte"];
const alunos = ["Maria", "João"];
const disciplinas = ["Matemática", "Português", "História"];

// Criando uma matriz 3D vazia: 2 escolas x 2 alunos x 3 disciplinas
// Estrutura final: matriz[escola][aluno][disciplina]
let notasGerais = Array.from({ length: escolas.length }, () => 
  Array.from({ length: alunos.length }, () => 
    Array(disciplinas.length).fill(0)
  )
);

console.log("=== ENTRADA DE NOTAS DO SISTEMA ===");

// Loops aninhados para percorrer cada dimensão da matriz 3D
for (let e = 0; e < escolas.length; e++) {         // Percorre as Escolas
  console.log(`\n--- ${escolas[e]} ---`);
  
  for (let a = 0; a < alunos.length; a++) {       // Percorre os Alunos de cada escola
    console.log(`Aluno(a): ${alunos[a]}`);
    
    for (let d = 0; d < disciplinas.length; d++) { // Percorre as Disciplinas de cada aluno
      // Pede a nota e armazena na coordenada exata [escola][aluno][disciplina]
      notasGerais[e][a][d] = Number(prompt(`  Nota de ${disciplinas[d]}: `));
    }
  }
}

console.log("\n=== RELATÓRIO GERAL DE NOTAS ===");

// Loops para ler e exibir os dados organizados de forma legível
for (let e = 0; e < escolas.length; e++) {
  console.log(`\n===================================`);
  console.log(`UNIDADE: ${escolas[e].toUpperCase()}`);
  console.log(`===================================`);
  
  for (let a = 0; a < alunos.length; a++) {
    console.log(`\n Boletim do Aluno(a): ${alunos[a]}`);
    console.log(`---------------------------------`);
    
    for (let d = 0; d < disciplinas.length; d++) {
      let notaFinal = notasGerais[e][a][d];
      console.log(`* ${disciplinas[d]}: ${notaFinal.toFixed(1)}`);
    }
  }
}
console.table(notasGerais);