// Algoritmo "Tabuada Escolhida pelo Usuário"
import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });
// Pede ao usuário o número que ele deseja calcular
let entrada = prompt("Digite o número que você deseja ver a tabuada:");
let numero = parseInt(entrada);

// Verifica se o usuário digitou um número válido
if (isNaN(numero)) {
  console.log("Por favor, digite um número válido!");
} else {
  let resultado = `--- Tabuada do ${numero} ---\n`;
// O loop vai rodar de 1 até 10

  for (let i = 1; i <= 10; i++) {

    let multiplicacao = numero * i;

    // Monta a linha do texto: Ex "5 x 1 = 5"
    resultado += `${numero} x ${i} = ${multiplicacao}\n`;
  }

  // Exibe o resultado final completo na tela
  
  console.log(resultado);

}
