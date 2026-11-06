// arquivo: app.js
// Importando as duas funções do mesmo arquivo
import { somar, subtrair } from './calculos.js';  // Garanta que o caminho do arquivo e o .js estão corretos

// Executando a função de somar
const resultadoSoma = somar(10, 5); // Saída: 15
console.log("Resultado da Soma: " + resultadoSoma); // <--- Isso garante que o resultado vai aparecer na tela

// Executando a função de subtrair
const resultadoSubtracao = subtrair(10, 5); // Saída: 5
console.log("Resultado da Subtração: " + resultadoSubtracao); // <--- Isso garante que o resultado vai aparecer na tela