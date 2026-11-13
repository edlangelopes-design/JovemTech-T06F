import { Inimigo } from "./Inimigo";

// =============================================
// HERANÇA - Pilar da Herança
// =============================================
// Goomba herda de Inimigo e só precisa implementar o método "atacar".

export class Goomba extends Inimigo {
  
  constructor() {
    // Chama o construtor da classe pai passando nome e pontos
    super("Goomba", 100);
  }

  atacar(): void {
    console.log("🍄 Goomba caminha em sua direção!");
  }
}