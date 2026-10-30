// Importa e inicializa o pacote prompt-sync
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

console.log("=== CAIXA REGISTRADORA SIMPLES ===");
console.log("1 - Arroz  (R$ 5.00)");
console.log("2 - Feijão (R$ 7.50)");
console.log("3 - Macarrão (R$ 3.00)");
console.log("0 - Encerrar compras e ver o total\n");

let totalCompra = 0;
let continuar = true;

while (continuar) {
    let entrada = prompt('Digite o código do produto: ');
    let codigoProduto = Number(entrada);

    switch (codigoProduto) {
        case 1:
            console.log("-> Arroz adicionado (+ R$ 5,00)");
            totalCompra += 5.00;
            // Exibe o subtotal acumulado até o momento
            console.log(`   [Subtotal: R$ ${totalCompra.toFixed(2)}]\n`);
            break;
            
        case 2:
            console.log("-> Feijão adicionado (+ R$ 7,50)");
            totalCompra += 7.50;
            console.log(`   [Subtotal: R$ ${totalCompra.toFixed(2)}]\n`);
            break;
            
        case 3:
            console.log("-> Macarrão adicionado (+ R$ 3,00)");
            totalCompra += 3.00;
            console.log(`   [Subtotal: R$ ${totalCompra.toFixed(2)}]\n`);
            break;
            
        case 0:
            console.log("\nFinalizando o atendimento...");
            continuar = false;
            break;
            
        default:
            console.log(`⚠️ Código [${entrada}] inválido! Nenhum produto adicionado.`);
            console.log(`   [Subtotal atual: R$ ${totalCompra.toFixed(2)}]\n`);
            break;
    }
}

// Fechamento final e estético da conta
console.log("=================================");
console.log(`  VALOR TOTAL A PAGAR: R$ ${totalCompra.toFixed(2)}`);
console.log("=================================");