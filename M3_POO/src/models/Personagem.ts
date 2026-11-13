// =============================================
// CLASSE ABSTRATA - Pilar da Abstração
// =============================================
// Esta é a classe "mãe" de todos os personagens do jogo.
// Ela é abstrata, ou seja, NÃO pode ser instanciada diretamente.
// Serve apenas como um modelo (molde) que define o que todo personagem deve ter.

export abstract class Personagem {
  
  // Construtor: método especial que é executado quando criamos um novo objeto
  constructor(
    public nome: string,        // Nome do personagem (ex: "Mario")
    protected vida: number      // Vida do personagem (protected = só a classe e suas filhas podem acessar)
  ) {}

  // Método abstrato: OBRIGA todas as classes filhas a implementarem este método.
  // Cada personagem vai atacar de um jeito diferente.
  abstract atacar(): void;

  // Método concreto (já implementado): todos os personagens podem se mover da mesma forma.
  mover(): void {
    console.log(`${this.nome} está se movendo!`);
  }
}