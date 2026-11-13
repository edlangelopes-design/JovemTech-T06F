// Importações corretas - cada classe está no seu próprio arquivo
import { Goomba } from "./models/Goomba";
import { KoopaTroopa } from "./models/KoopaTroopa";
import { Mario } from "./models/Mario";
import { MarioFogo } from "./models/MarioFogo";
// =============================================
// DEMONSTRAÇÃO PRÁTICA - MÓDULO 3
// Programação Orientada a Objetos com TypeScript
// Tema: Super Mario Bros
// =============================================
console.log("\n==========================================");
console.log("           SUPER MARIO BROS");
console.log("   (DEMONSTRAÇÃO DOS 4 PILARES DA POO)");
console.log("==========================================\n");
// =============================================
// PARTE 1: HERANÇA + ENCAPSULAMENTO
// =============================================
console.log("\n>>> PARTE 1: Herança e Encapsulamento\n");
console.log("==========================================\n");
const mario = new Mario();
console.log("→ Criando o objeto Mario (herdando de Personagem)...");
mario.atacar(); // Método implementado a partir da classe abstrata
mario.pular(); // Método exclusivo da classe Mario
// =============================================
// PILAR 2 POLIMORFISMO
// =============================================
// Temos vários inimigos diferentes (Goomba e Koopa Troopa).
// Todos herdam de "Inimigo", por isso podemos colocá-los no mesmo array.
// O mesmo método "atacar()" produz comportamentos completamente diferentes.
console.log("\n\n>>> PARTE 2: Polimorfismo em ação\n");
console.log("==========================================\n");
console.log("→ Criando um array com diferentes tipos de inimigos:");
const inimigos = [new Goomba(), new KoopaTroopa()];
// Mostrando o segundo inimigo + quebra de linha
console.log(`🍄 ${inimigos[0].nome} e 🐢 ${inimigos[1].nome}\n`);
console.log("→ Chamando o mesmo método 'atacar()' em objetos diferentes:\n");
inimigos.forEach((inimigo, index) => {
    console.log(`Inimigo ${index + 1} (${inimigo.nome}):`);
    inimigo.atacar();
    // Goomba  → "🍄 Goomba caminha em sua direção!"
    // Koopa   → "🐢 Koopa se esconde na concha e desliza!"
    console.log("");
});
// =============================================
// PARTE 3: ABSTRAÇÃO + COMPOSIÇÃO
// =============================================
console.log("\n\n>>> PARTE 3: Abstração e Composição (Interface)\n");
console.log("==========================================\n");
console.log("→ Aplicando um Power-Up no Mario (Lançar bola de fogo)...");
const marioFogo = new MarioFogo();
marioFogo.lancarBolaDeFogo(); // Novo comportamento adicionado via composição
console.log("\n");
// =============================================
// FINALIZAÇÃO DA DEMONSTRAÇÃO
// =============================================
console.log("\n==========================================");
console.log("       🍄 FIM DA DEMONSTRAÇÃO 🍄");
console.log("==========================================\n");
console.log("Com isso, demonstramos os 4 pilares da POO de forma prática e visual.");
console.log("Obrigada pela atenção e até a próxima!\n\n");
//# sourceMappingURL=index2.js.map