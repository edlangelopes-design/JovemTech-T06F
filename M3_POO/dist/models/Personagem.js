// =============================================
// CLASSE ABSTRATA - Pilar da Abstração
// =============================================
// Esta é a classe "mãe" de todos os personagens do jogo.
// Ela é abstrata, ou seja, NÃO pode ser instanciada diretamente.
// Serve apenas como um modelo (molde) que define o que todo personagem deve ter.
export class Personagem {
    nome;
    vida;
    // Construtor: método especial que é executado quando criamos um novo objeto
    constructor(nome, // Nome do personagem (ex: "Mario")
    vida // Vida do personagem (protected = só a classe e suas filhas podem acessar)
    ) {
        this.nome = nome;
        this.vida = vida;
    }
    // Método concreto (já implementado): todos os personagens podem se mover da mesma forma.
    mover() {
        console.log(`${this.nome} está se movendo!`);
    }
}
//# sourceMappingURL=Personagem.js.map