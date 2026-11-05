import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true }); // Permite fechar o programa com Ctrl + C

console.log("=== CAIXA REGISTRADORA SIMPLES ===");
console.log("1 - Arroz  (R$ 5.00)");
console.log("2 - Feijão (R$ 7.50)");
console.log("3 - Macarrão (R$ 3.00)");
console.log("0 - Encerrar compras e ver o total\n");

let totalCompra = 0;
let continuar = true;

// O laço 'while' vai continuar rodando enquanto a variável 'continuar' for verdadeira
while (continuar) {
    // Pede para o usuário digitar o código e converte para Número
    let codigoProduto = Number(prompt("Digite o código do produto (ou 0 para encerrar): "));

    // Utilizando a estrutura CASO (switch) para validar o produto selecionado
    switch (codigoProduto) {
        case 1:
            console.log("-> Item adicionado: Arroz - R$ 5,00\n");
            totalCompra += 5.00;
            break;  
        case 2:
            console.log("-> Item adicionado: Feijão - R$ 7,50\n");
            totalCompra += 7.50;
            break;
        case 3:
            console.log("-> Item adicionado: Macarrão - R$ 3,00\n");
            totalCompra += 3.00;
            break;         
        case 0:
            console.log("\nFinalizando o atendimento...");
            continuar = false; // Muda para false para encerrar o laço while
            break;
        default:
            console.log(`[!] Código [${codigoProduto}] inválido! Nenhum produto adicionado.\n`);
            break;
    }
}

// Exibe o resultado final na tela
console.log("---------------------------------");
console.log(`VALOR TOTAL A PAGAR: R$ ${totalCompra.toFixed(2)}`);
console.log("---------------------------------");