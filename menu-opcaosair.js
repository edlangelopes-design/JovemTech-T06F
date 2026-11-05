// Algoritmo "Menu de Ferramentas Integradas"
import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

let opcao;

do {
  // Monta o texto do menu interativo
  let textoMenu = "=== SISTEMA MULTIFUNÇÕES ===\n" +
                  "1. Calcular Tabuada\n" +
                  "2. Abrir Caixa Registradora\n" +
                  "3. Sair do Programa\n\n" +
                  "Escolha uma opção (1 a 3):";
  
  opcao = prompt(textoMenu);

  switch (opcao) {
    case "1":
      // --- CÓDIGO DA TABUADA ---
      let entradaTabuada = prompt("Digite o número que você deseja ver a tabuada:");
      let numeroTabuada = parseInt(entradaTabuada);

      if (isNaN(numeroTabuada)) {
        console.log("Por favor, digite um número válido!");
      } else {
        let txtTabuada = `--- Tabuada do ${numeroTabuada} ---\n`;
        for (let i = 1; i <= 10; i++) {
          txtTabuada += `${numeroTabuada} x ${i} = ${numeroTabuada * i}\n`;
        }
        console.log(txtTabuada);
      }
      break;
    
case "2":

      // --- CÓDIGO DA CAIXA REGISTRADORA ---

      let totalCaixa = 0;

      let continuarCaixa = true;

      console.log("Caixa Registradora Aberta!\nDigite o valor dos produtos. Digite 0 para fechar a conta.");

while (continuarCaixa) {

        let entradaCaixa = prompt("Digite o valor do produto (ou 0 para terminar):");

        let valorProduto = parseFloat(entradaCaixa);



if (valorProduto === 0 || isNaN(valorProduto)) {

          continuarCaixa = false;

        } else if (valorProduto < 0) {

          console.log("Valores negativos não são aceitos.");

        } else {

          totalCaixa += valorProduto;

        }

      }
console.log(`Conta Finalizada!\nTotal das compras: R$ ${totalCaixa.toFixed(2)}`);

      break;

case "3":

case null: // Se clicar em Cancelar sai do programa

opcao = "3"; // Garante a quebra do loop condicional

console.log("Encerrando o sistema geral... Até mais!");

break;

default:

console.log("Opção inválida! Digite um número entre 1 e 3.");

break;

  }

} while (opcao !== "3");    
    