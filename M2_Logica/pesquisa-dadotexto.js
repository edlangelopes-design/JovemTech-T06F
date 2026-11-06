let frase = "Curso de Lógica de Programação com JavaScript";
console.log("Frase original: " + frase);

// 1. .includes() - Verifica se uma palavra existe no texto (retorna true ou false)
console.log(frase.includes("Lógica"));     // true
console.log(frase.includes("Python"));     // false

// 2. .indexOf() - Retorna a POSIÇÃO (índice) onde a palavra começa. Se não achar, retorna -1
console.log(frase.indexOf("Lógica"));      // 9 (a palavra começa no índice 9)
console.log(frase.indexOf("HTML"));        // -1 (não existe na string)

// 3. .startsWith() e .endsWith() - Checa o início ou o fim da string
console.log(frase.startsWith("Curso"));    // true
console.log(frase.endsWith("JavaScript")); // true