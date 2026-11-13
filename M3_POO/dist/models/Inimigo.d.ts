export declare abstract class Inimigo {
    nome: string;
    pontosAoDerrotar: number;
    constructor(nome: string, pontosAoDerrotar: number);
    serDerrotado(): void;
    abstract atacar(): void;
}
//# sourceMappingURL=Inimigo.d.ts.map