import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Função que analisa a idade e retorna uma resposta
function checarMaioridade(idadePessoa) {
  if (idadePessoa >= 18) {
    return "Você é maior de idade.";
  } else {
    return "Você é menor de idade.";
  }
}

// 1. Captura o dado do usuário (convertendo o texto do prompt em número)
let idadeDigitada = Number(prompt("Digite a sua idade para validação:"));

// 2. Passa o valor para a função e guarda o resultado
let resultado = checarMaioridade(idadeDigitada);

// 3. Registra tudo no console de forma organizada
console.log("Idade analisada:", idadeDigitada);
console.log("Status do usuário:", resultado);
