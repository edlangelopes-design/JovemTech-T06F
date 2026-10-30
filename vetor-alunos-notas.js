import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

// Declaração dos dois vetores vazios
const nomes = [];
const notas = [];

console.log("=== CADASTRO DE ALUNOS ===");
// Primeiro: lê todos os 10 nomes
for (let i = 0; i < 10; i++) {
    nomes[i] = prompt(`Digite o nome do ${i + 1}º aluno: `);
}

console.log("\n=== CADASTRO DE NOTAS ===");
// Segundo: lê as 10 notas respectivamente
for (let i = 0; i < 10; i++) {
    // Usamos o nome guardado no vetor para deixar a pergunta mais clara
    notas[i] = Number(prompt(`Digite a nota de ${nomes[i]}: `));
}

console.log("\n=== RESULTADO FINAL ===");
// Terceiro: exibe os nomes e notas emparelhados na ordem digitada
for (let i = 0; i < 10; i++) {
    console.log(`Aluno(a): ${nomes[i]} | Nota: ${notas[i].toFixed(1)}`);
}
