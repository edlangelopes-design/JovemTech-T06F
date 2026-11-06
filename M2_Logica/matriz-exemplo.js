import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// CORRIGIDO: Agora cada linha é explicitamente um array com 4 colunas zeradas
const valores = [
    [0, 0, 0, 0], // Linha 0
    [0, 0, 0, 0], // Linha 1
    [0, 0, 0, 0]  // Linha 2
];

console.log("=== DIGITE OS VALORES DA MATRIZ ===");

// Recebe os dados do usuário nas posições exatas da sua atividade
valores[0][0] = Number(prompt("Digite o valor para valores[0][0]: "));
valores[1][2] = Number(prompt("Digite o valor para valores[1][2]: "));
valores[2][1] = Number(prompt("Digite o valor para valores[2][1]: "));
valores[2][3] = Number(prompt("Digite o valor para valores[2][3]: "));

console.log("\n=== MATRIZ COMPLETA ===");
console.table(valores);