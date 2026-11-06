// Caixa registradora simples - com while// 
import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });// Permite fechar com Ctrl + C


let total = 0;
let continuar = true;

console.log("Bem-vindo à Caixa Registradora!\nDigite o valor de cada produto. Digite 0 para encerrar.");

while (continuar) {
  // Pede o valor do produto ao usuário e converte para número decimal
  let entrada = prompt("Digite o valor do produto (ou 0 para terminar):");
  let valor = parseFloat(entrada);

  // Verifica se o usuário digitou 0 ou cancelou o prompt
  if (valor === 0 || isNaN(valor)) {
    continuar = false; // Interrompe o loop

    } else if (valor < 0) {
    console.log("Valor inválido! O preço não pode ser negativo.");
  } else {
    total += valor; // Soma o preço do produto ao total acumulado
    console.log(`Produto adicionado: R$ ${valor.toFixed(2)} | Total atual: R$ ${total.toFixed(2)}`);
  }
}

// Exibe o resultado final com duas casas decimais
console.log(`Compras finalizadas!\nO valor total da sua compra é: R$ ${total.toFixed(2)}`);
