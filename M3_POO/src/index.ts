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
// Cria a função de pausa (1000ms = 1 segundo)
const aguardar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function executarProcesso() {
    console.log("\n==========================================");
    console.log("  🍄 🍄 🍄   SUPER MARIO BROS   🍄 🍄 🍄");
    console.log("  -- DEMONSTRAÇÃO DOS 4 PILARES DA POO --");
    console.log("==========================================\n");

    // =============================================
    // PARTE 1: HERANÇA + ENCAPSULAMENTO
    // =============================================
    console.log("\n==========================================");
    console.log("\n>>> PARTE 1: Herança e Encapsulamento\n");
    console.log("==========================================\n");

    const mario = new Mario();
    
    console.log("→ Criando o objeto Mario (herdando de Personagem)...");
    mario.atacar();     // Método implementado a partir da classe abstrata
    mario.pular();      // Método exclusivo da classe Mario
    
    await aguardar(6000); // Pausa por 6 segundos

    // =============================================
    // PILAR 2 POLIMORFISMO
    // =============================================
    // Temos vários inimigos diferentes (Goomba e Koopa Troopa).
    // Todos herdam de "Inimigo", por isso podemos colocá-los no mesmo array.
    // O mesmo método "atacar()" produz comportamentos completamente diferentes.
    console.log("\n===============================================");
    console.log("\n>>> PARTE 2: Polimorfismo em ação\n");
    console.log("===============================================\n");

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

    await aguardar(10000); // Pausa por 10 segundos

    // =============================================
    // PARTE 3: ABSTRAÇÃO + COMPOSIÇÃO
    // =============================================
    console.log("\n===============================================");
    console.log("\n>>> PARTE 3: Abstração e Composição (Interface)\n");
    console.log("===============================================\n");

    console.log("→ Aplicando um Power-Up no Mario (Lançar bola de fogo)...");
    const marioFogo = new MarioFogo();

    marioFogo.lancarBolaDeFogo();   // Novo comportamento adicionado via composição

    console.log("\n");

    await aguardar(6000); // Pausa por 6 segundos

    // =============================================
    // FINALIZAÇÃO DA DEMONSTRAÇÃO
    // =============================================
    console.log("\n===============================================");
    console.log("\n   🍄 🍄 🍄  FIM DA DEMONSTRAÇÃO  🍄 🍄 🍄\n");
    console.log("===============================================\n");

    console.log("Com isso, demonstramos os 4 pilares da POO de forma prática e visual.");
    console.log("Obrigada pela atenção e até a próxima! ⭐⭐⭐ \n\n");
}

executarProcesso();