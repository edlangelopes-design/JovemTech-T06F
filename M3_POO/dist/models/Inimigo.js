// =============================================
// CLASSE ABSTRATA - Pilar da Abstração
// =============================================
// Todos os inimigos do jogo vão herdar desta classe.
// Ela define o comportamento comum a todos os inimigos.
export class Inimigo {
    nome;
    pontosAoDerrotar;
    constructor(nome, pontosAoDerrotar // Quantos pontos o jogador ganha ao derrotar
    ) {
        this.nome = nome;
        this.pontosAoDerrotar = pontosAoDerrotar;
    }
    // Método concreto: todos os inimigos podem ser derrotados da mesma forma
    serDerrotado() {
        console.log(`💥 ${this.nome} foi derrotado! +${this.pontosAoDerrotar} pontos`);
    }
}
//# sourceMappingURL=Inimigo.js.map