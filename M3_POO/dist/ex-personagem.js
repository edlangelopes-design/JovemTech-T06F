"use strict";
class Personagem {
    nome;
    vidas;
    pontos;
    constructor(nome) {
        this.nome = nome;
        this.vidas = 3;
        this.pontos = 0;
    }
    pular() {
        console.log(`${this.nome} pulou! 🍄`);
    }
}
// Criando objetos:
const mario = new Personagem("Mario");
const luigi = new Personagem("Luigi");
console.log("==========================================\n");
console.log("→ Criando o objeto Mario (herdando de Personagem)...");
mario.pular(); // Método implementado a partir da classe abstrata
console.log("==========================================\n");
console.log("→ Criando o objeto Luigi (herdando de Personagem)...");
luigi.pular(); // Método implementado a partir da classe abstrata
//# sourceMappingURL=ex-personagem.js.map