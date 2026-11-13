// =============================================
// CLASSE ABSTRATA - Pilar da Abstração
// =============================================
// Todos os inimigos do jogo vão herdar desta classe.
// Ela define o comportamento comum a todos os inimigos.

export abstract class Inimigo {
  
  constructor(
    public nome: string,
    public pontosAoDerrotar: number   // Quantos pontos o jogador ganha ao derrotar
  ) {}

  // Método concreto: todos os inimigos podem ser derrotados da mesma forma
  serDerrotado(): void {
    console.log(`💥 ${this.nome} foi derrotado! +${this.pontosAoDerrotar} pontos`);
  }

  // Método abstrato: cada inimigo ataca de forma diferente
  abstract atacar(): void;
}