let texto = "  Aprender JavaScript é Incrível!  ";

// 1. .trim() - Remove os espaços em branco do início e do fim
let textoLimpo = texto.trim();
console.log(textoLimpo); // "Aprender JavaScript é Incrível!"

// 2. .toLowerCase() e .toUpperCase() - Padroniza tudo em minúsculo ou maiúsculo
// Essencial para pesquisar dados sem se preocupar com letras maiúsculas/minúsculas
console.log(textoLimpo.toLowerCase()); // "aprender javascript é incrível!"
console.log(textoLimpo.toUpperCase()); // "APRENDER JAVASCRIPT É INCRÍVEL!"

// 3. .replace() ou .replaceAll() - Substitui um pedaço do texto por outro
let novoTexto = textoLimpo.replace("Incrível", "Fácil");
console.log(novoTexto); // "Aprender JavaScript é Fácil!"