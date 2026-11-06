import promptSync from 'prompt-sync';
const prompt = promptSync();

// O restante do seu código continua exatamente igual:
let valor1 = parseInt(prompt("Digite o primeiro valor inteiro: "));
let valor2 = parseInt(prompt("Digite o segundo valor inteiro: "));

if (valor1 > valor2) {
    console.log("O maior valor é: " + valor1);
} else if (valor2 > valor1) {
    console.log("O maior valor é: " + valor2);
} else {
    console.log("Os dois valores são iguais: " + valor1);
}