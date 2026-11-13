import { Mario } from "../models/Mario";

// =============================================
// INTERFACE - Pilar da Abstração
// =============================================
// Uma interface é um CONTRATO.
// Qualquer power-up que criarmos no futuro DEVE ter o método "aplicar".
// Isso garante que todos os power-ups sigam o mesmo padrão.

export interface IPowerUp {
  aplicar(mario: Mario): void;
}