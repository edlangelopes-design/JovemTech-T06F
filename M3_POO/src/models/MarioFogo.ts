import { Mario } from "./Mario";
import { IPowerUp } from "../interfaces/IPowerUp";

// =============================================
// COMPOSIÇÃO + INTERFACE (Múltiplos comportamentos)
// =============================================
// MarioFogo herda de Mario (Herança) 
// e também implementa a interface IPowerUp (Abstração).

export class MarioFogo extends Mario implements IPowerUp {
  
  lancarBolaDeFogo(): void {
    console.log("🔥 Lançando bola de fogo!");
  }

  // Método obrigatório vindo da interface IPowerUp
  aplicar(mario: Mario): void {
    console.log("🌸 Mario agora pode lançar fogo!");
  }
}