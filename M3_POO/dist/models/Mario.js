import { Personagem } from "./Personagem";
// =============================================
// HERANÇA - Pilar da Herança
// =============================================
// A classe Mario HERDA tudo da classe Personagem.
// Isso significa que Mario já nasce com os atributos "nome" e "vida",
// além do método "mover()".
export class Mario extends Personagem {
    constructor() {
        // super() chama o construtor da classe pai (Personagem)
        super("Mario", 3); // Mario começa com 3 vidas
    }
    // Implementação obrigatória do método abstrato "atacar"
    atacar() {
        console.log("🍄 Pulo poderoso!");
    }
    // Método exclusivo do Mario (não existe na classe pai)
    pular() {
        console.log("⭐ Woo-hoo!");
    }
}
//# sourceMappingURL=Mario.js.map