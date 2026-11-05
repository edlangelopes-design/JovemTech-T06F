import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

function buscarProduto(termoPesquisado) {
  // Nosso "banco de dados" de produtos disponíveis
  const produtosDisponiveis = ["Notebook Dell", "Teclado Mecânico", "Mouse Sem Fio", "Monitor Gamer"];

  // 1. Limpamos o termo digitado pelo usuário (remove espaços e põe em minúsculo)
  let termoLimpo = termoPesquisado.trim().toLowerCase();

  console.log(`\nBuscando por: "${termoLimpo}"...`);

  // 2. Percorremos a lista de produtos para ver se algum deles contém o termo
  for (let i = 0; i < produtosDisponiveis.length; i++) {
    let produtoAtual = produtosDisponiveis[i].toLowerCase();
     // Se o produto atual contiver o termo que o usuário digitou
if (produtoAtual.includes(termoLimpo)) {
      return `Produto encontrado: ${produtosDisponiveis[i]} (Posição: ${i})`;
    }
  }

  return "Nenhum produto encontrado para essa busca.";
}

// Execução do programa
let buscaUsuario = prompt("Digite o nome do produto que deseja procurar: ");
let resultadoDaBusca = buscarProduto(buscaUsuario);

console.log(resultadoDaBusca);

