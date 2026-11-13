import { Mario } from "./Mario";
// =============================================
// COMPOSIÇÃO + INTERFACE (Múltiplos comportamentos)
// =============================================
// MarioFogo herda de Mario (Herança) 
// e também implementa a interface IPowerUp (Abstração).
export class MarioFogo extends Mario {
    lancarBolaDeFogo() {
        console.log("🔥 Lançando bola de fogo!");
    }
    // Método obrigatório vindo da interface IPowerUp
    aplicar(mario) {
        console.log("🌸 Mario agora pode lançar fogo!");
    }
}
//# sourceMappingURL=MarioFogo.js.map