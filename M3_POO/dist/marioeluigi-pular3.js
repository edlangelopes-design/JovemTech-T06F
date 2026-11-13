import * as readline from 'readline';
// CLASSE MÃE (Abstrata / Base)
class Personagem {
    nome;
    vidas;
    pontos;
    // Atributos protegidos que as subclasses vão customizar
    cor;
    resetCor = "\x1b[0m";
    alturaMaximaPulo;
    velocidadePuloMs;
    // Matriz de desenho compartilhada
    matrizSprite = [
        "  MMMMM  ",
        " MMMMMMM ",
        " BBBOBBB ",
        " MMMBMMM ",
        "  XXXXX  ",
        "  XX XX  ",
        "  TT TT  "
    ];
    constructor(nome, alturaMaxima, velocidadeMs, codigoCor) {
        this.nome = nome;
        this.vidas = 3;
        this.pontos = 0;
        this.alturaMaximaPulo = alturaMaxima;
        this.velocidadePuloMs = velocidadeMs;
        this.cor = codigoCor;
    }
    sleep(ms) {
        const start = Date.now();
        while (Date.now() - start < ms) { }
    }
    // Método de renderização gráfica na tela
    desenhar(alturaPulo = 0) {
        console.clear();
        // imprimir o nome do personagem centralizado em um cabeçalho, 
        // com letras maiúsculas e com a sua cor original correspondente 
        // (Vermelho para o Mario e Verde para o Luigi).
        console.log(`\n=== ${this.cor}${this.nome.toUpperCase()}${this.resetCor} ===`);
        // O teto dinâmico se adapta à altura máxima do pulo do personagem atual
        const linhasTopo = this.alturaMaximaPulo - alturaPulo;
        console.log("\n".repeat(Math.max(0, linhasTopo)));
        this.matrizSprite.forEach(linha => {
            let linhaColorida = "";
            for (const char of linha) {
                if (char === "M") {
                    linhaColorida += `${this.cor}██${this.resetCor}`;
                }
                else if (char === "B") {
                    linhaColorida += "\x1b[37m██\x1b[0m";
                }
                else if (char === "O") {
                    linhaColorida += "\x1b[30m██\x1b[0m";
                }
                else if (char === "X") {
                    linhaColorida += "\x1b[34m██\x1b[0m";
                }
                else if (char === "T") {
                    linhaColorida += "\x1b[33m██\x1b[0m";
                }
                else {
                    linhaColorida += "  ";
                }
            }
            console.log(linhaColorida);
        });
        console.log("\n".repeat(alturaPulo));
        console.log("██████████████████████████████████████████");
    }
    // Método principal que executa a física do pulo usando os atributos customizados
    pular() {
        // Subida
        for (let altura = 0; altura <= this.alturaMaximaPulo; altura++) {
            this.desenhar(altura);
            if (altura === this.alturaMaximaPulo) {
                console.log(`\n  ${this.nome} atingiu o topo do pulo! 🍄`);
                this.sleep(150);
            }
            else {
                console.log(`\n  ${this.nome} subindo correndo...`);
                this.sleep(this.velocidadePuloMs);
            }
        }
        // Descida
        for (let altura = this.alturaMaximaPulo - 1; altura >= 0; altura--) {
            this.desenhar(altura);
            if (altura === 0) {
                console.log(`\n  ${this.nome} aterrissou com impacto! 👟`);
            }
            else {
                console.log(`\n  ${this.nome} caindo pela gravidade...`);
                this.sleep(this.velocidadePuloMs);
            }
        }
        this.sleep(800);
    }
}
// SUBCLASSE MARIO (Herda de Personagem)
class Mario extends Personagem {
    constructor() {
        // Nome, Altura Máxima (5), Velocidade (Super Rápido: 40ms), Cor Vermelha
        super("Mario", 5, 40, "\x1b[31;1m");
    }
}
// SUBCLASSE LUIGI (Herda de Personagem)
class Luigi extends Personagem {
    constructor() {
        // Nome, Altura Máxima (Super Alto: 8), Velocidade (Flutuante/Mais Lento: 70ms), Cor Verde
        super("Luigi", 8, 70, "\x1b[32;1m");
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
    // Instanciando os objetos através das suas classes específicas (Polimorfismo)
    const mario = new Mario();
    const luigi = new Luigi();
    console.clear();
    await esperarEnter("Pressione [ENTER] para ver o MARIO (Pulo Rápido)...");
    mario.pular();
    console.log("\n");
    await esperarEnter("Pressione [ENTER] para ver o LUIGI (Pulo Alto e Flutuante)...");
    luigi.pular();
}
iniciarJogo();
//# sourceMappingURL=marioeluigi-pular3.js.map