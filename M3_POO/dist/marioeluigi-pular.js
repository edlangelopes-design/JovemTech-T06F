import * as readline from 'readline';
// CLASSE MÃE (Abstrata / Base)
class Personagem {
    nome;
    vidas;
    pontos;
    corCamiseta;
    corMacacao;
    resetCor = "\x1b[0m";
    alturaMaximaPulo;
    velocidadePuloMs;
    spriteGrid;
    constructor(nome, alturaMaxima, velocidadeMs, // Parâmetro recebido
    codigoCamiseta, codigoMacacao, grid) {
        this.nome = nome;
        this.vidas = 3;
        this.pontos = 0;
        this.alturaMaximaPulo = alturaMaxima;
        this.velocidadePuloMs = velocidadeMs; // CORRIGIDO DEFINITIVAMENTE: Usa a variável correta
        this.corCamiseta = codigoCamiseta;
        this.corMacacao = codigoMacacao;
        this.spriteGrid = grid;
    }
    sleep(ms) {
        const start = Date.now();
        while (Date.now() - start < ms) { }
    }
    // Mapeia os caracteres para blocos e texturas estáveis correspondentes às imagens
    obterPixelColorido(char) {
        switch (char) {
            case "K": return "\x1b[30m██"; // Contorno Preto Escuro
            case "C": return `${this.corCamiseta}██${this.resetCor}`; // Camiseta/Boné (Vermelho ou Verde)
            case "M": return `${this.corMacacao}██${this.resetCor}`; // Macacão Azul clássico
            case "B": return "\x1b[33m▒▒"; // Rosto/Pele (Textura sombreada clássica de terminal para o tom bege)
            case "W": return "\x1b[37m██"; // Luvas e Olhos brancos destacados
            case "Y": return "\x1b[33;1m██"; // Botões Amarelos intensos
            case "S": return "\x1b[31m██"; // Sapatos
            default: return "  "; // Fundo transparente
        }
    }
    desenhar(alturaPulo = 0) {
        console.clear();
        console.log(`\n=== ${this.corCamiseta}${this.nome.toUpperCase()}${this.resetCor} ===`);
        const linhasTopo = this.alturaMaximaPulo - alturaPulo;
        console.log("\n".repeat(Math.max(0, linhasTopo)));
        // Renderiza a matriz pixel por pixel mantendo a proporção correta das imagens
        this.spriteGrid.forEach(linha => {
            let linhaTerminal = "";
            linha.forEach(char => {
                linhaTerminal += this.obterPixelColorido(char);
            });
            console.log(linhaTerminal);
        });
        console.log("\n".repeat(alturaPulo));
        console.log("\x1b[30m████████████████████████████████████████████████████████████\x1b[0m");
    }
    pular() {
        for (let altura = 0; altura <= this.alturaMaximaPulo; altura++) {
            this.desenhar(altura);
            if (altura === this.alturaMaximaPulo) {
                console.log(`\n  ${this.nome} atingiu o topo do pulo! 🍄`);
                this.sleep(150);
            }
            else {
                console.log(`\n  ${this.nome} subindo...`);
                this.sleep(this.velocidadePuloMs);
            }
        }
        for (let altura = this.alturaMaximaPulo - 1; altura >= 0; altura--) {
            this.desenhar(altura);
            if (altura === 0) {
                console.log(`\n  ${this.nome} aterrissou com impacto! 👟`);
            }
            else {
                console.log(`\n  ${this.nome} descendo...`);
                this.sleep(this.velocidadePuloMs);
            }
        }
        this.sleep(800);
    }
}
// SUBCLASSE MARIO (Resolução 16x16 idêntica à imagem fornecida)
class Mario extends Personagem {
    static gridMario = [
        [".", ".", ".", ".", ".", "K", "K", "K", "K", "K", "K", ".", ".", ".", ".", "."],
        [".", ".", ".", "K", "K", "C", "C", "C", "C", "C", "C", "K", "K", ".", ".", "."],
        [".", ".", "K", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "K", ".", "."],
        [".", ".", "K", "K", "K", "B", "B", "K", "B", "K", "B", "B", "K", "K", ".", "."],
        [".", "K", "B", "K", "B", "B", "B", "K", "B", "K", "B", "B", "B", "K", "B", "K"],
        [".", "K", "B", "K", "B", "B", "B", "B", "K", "B", "B", "B", "B", "K", "B", "K"],
        [".", ".", "K", "K", "B", "B", "B", "B", "B", "B", "B", "B", "B", "K", "K", "."],
        [".", ".", ".", ".", "K", "K", "K", "K", "K", "K", "K", "K", "K", ".", ".", "."],
        [".", ".", "K", "K", "C", "M", "C", "C", "C", "C", "M", "C", "K", "K", ".", "."],
        [".", "K", "C", "C", "C", "M", "Y", "C", "C", "Y", "M", "C", "C", "C", "K", "."],
        ["K", "W", "W", "K", "C", "M", "M", "M", "M", "M", "M", "C", "K", "W", "W", "K"],
        ["K", "W", "W", "K", "M", "M", "M", "M", "M", "M", "M", "M", "K", "W", "W", "K"],
        ["K", "W", "W", "K", "M", "M", "M", "M", "M", "M", "M", "M", "K", "W", "W", "K"],
        [".", "K", "K", ".", "M", "M", "M", ".", ".", "M", "M", "M", ".", "K", "K", "."],
        [".", ".", ".", "K", "S", "S", "S", "K", "K", "S", "S", "S", "K", ".", ".", "."],
        [".", ".", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", ".", "."]
    ];
    constructor() {
        super("Mario", 5, 40, "\x1b[31m", "\x1b[34m", Mario.gridMario);
    }
}
// SUBCLASSE LUIGI (Resolução 16x16 idêntica à imagem fornecida)
class Luigi extends Personagem {
    static gridLuigi = [
        [".", ".", ".", ".", ".", "K", "K", "K", "K", "K", "K", ".", ".", ".", ".", "."],
        [".", ".", ".", "K", "K", "C", "C", "C", "C", "C", "C", "K", "K", ".", ".", "."],
        [".", ".", "K", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "K", ".", "."],
        [".", ".", "K", "K", "K", "B", "B", "K", "B", "K", "B", "B", "K", "K", ".", "."],
        [".", "K", "B", "K", "B", "B", "B", "K", "B", "K", "B", "B", "B", "K", "B", "K"],
        [".", "K", "B", "K", "B", "B", "B", "B", "K", "B", "B", "B", "B", "K", "B", "K"],
        [".", ".", "K", "K", "B", "B", "B", "B", "B", "B", "B", "B", "B", "K", "K", "."],
        [".", ".", ".", ".", "K", "K", "K", "K", "K", "K", "K", "K", "K", ".", ".", "."],
        [".", ".", "K", "K", "C", "M", "C", "C", "C", "C", "M", "C", "K", "K", ".", "."],
        [".", "K", "C", "C", "C", "M", "Y", "C", "C", "Y", "M", "C", "C", "C", "K", "."],
        ["K", "W", "W", "K", "C", "M", "M", "M", "M", "M", "M", "C", "K", "W", "W", "K"],
        ["K", "W", "W", "K", "M", "M", "M", "M", "M", "M", "M", "M", "K", "W", "W", "K"],
        ["K", "W", "W", "K", "M", "M", "M", "M", "M", "M", "M", "M", "K", "W", "W", "K"],
        [".", "K", "K", ".", "M", "M", "M", ".", ".", "M", "M", "M", ".", "K", "K", "."],
        [".", ".", ".", "K", "S", "S", "S", "K", "K", "S", "S", "S", "K", ".", ".", "."],
        [".", ".", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", ".", "."]
    ];
    constructor() {
        super("Luigi", 8, 70, "\x1b[32m", "\x1b[34m", Luigi.gridLuigi);
    }
}
// Controle do Terminal
function esperarEnter(mensagem) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(mensagem, () => {
            rl.close();
            resolve();
        });
    });
}
// Execução Principal do Script
async function iniciarJogo() {
    const mario = new Mario();
    const luigi = new Luigi();
    console.clear();
    await esperarEnter("Pressione [ENTER] para ver o MARIO com fidelidade de imagem...");
    mario.pular();
    console.log("\n");
    await esperarEnter("Pressione [ENTER] para ver o LUIGI com fidelidade de imagem...");
    luigi.pular();
}
iniciarJogo();
//# sourceMappingURL=marioeluigi-pular.js.map