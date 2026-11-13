import * as readline from 'readline';

// ============================================================
// PALETA DE CORES (ANSI)
// ============================================================
const COR = {
  reset: "\x1b[0m",
  preto: "\x1b[30m",
  vermelho: "\x1b[31m",
  verde: "\x1b[32m",
  amarelo: "\x1b[33;1m",
  azul: "\x1b[38;5;27m", //\x1b[34m     \x1b[38;5;19m
  marrom: "\x1b[38;5;130m",
  pele: "\x1b[38;5;223m",
  branco: "\x1b[97m",
} as const; 

// ============================================================
// CLASSE MÃE (Abstrata)
// ============================================================
abstract class Personagem {
  nome: string;
  vidas: number;
  pontos: number;

  protected corCamiseta: string;
  protected corMacacao: string;
  protected resetCor = COR.reset;
  protected alturaMaximaPulo: number;
  protected velocidadePuloMs: number;
  protected spriteGrid: string[][];

  constructor(
    nome: string,
    alturaMaxima: number,
    velocidadeMs: number,
    codigoCamiseta: string,
    codigoMacacao: string,
    grid: string[][]
  ) {
    this.nome = nome;
    this.vidas = 3;
    this.pontos = 0;
    this.alturaMaximaPulo = alturaMaxima;
    this.velocidadePuloMs = velocidadeMs;
    this.corCamiseta = codigoCamiseta;
    this.corMacacao = codigoMacacao;
    this.spriteGrid = grid;
  }

  private sleep(ms: number): void {
    const start = Date.now();
    while (Date.now() - start < ms) {}
  }

  /**
   * Legenda:
   * K = contorno preto   C = boné/camiseta   M = macacão
   * B = pele             W = branco (olho/luva/emblema)
   * P = pupila preta     Y = botão amarelo   S = sapato
   * . = transparente
   */
  private obterPixelColorido(char: string): string {
    switch (char) {
      case "K": return `${COR.preto}██${COR.reset}`;
      case "C": return `${this.corCamiseta}██${COR.reset}`;
      case "M": return `${this.corMacacao}██${COR.reset}`;
      case "B": return `${COR.pele}██${COR.reset}`;
      case "W": return `${COR.branco}██${COR.reset}`;
      case "P": return `${COR.preto}██${COR.reset}`;
      case "Y": return `${COR.amarelo}██${COR.reset}`;
      case "S": return `${COR.marrom}██${COR.reset}`;
      default:  return "  ";
    }
  }
  
  private desenhar(alturaPulo: number = 0): void {
    console.clear();
    console.log(`\n=== ${this.corCamiseta}${this.nome.toUpperCase()}${this.resetCor} ===`);

    const linhasTopo = this.alturaMaximaPulo - alturaPulo;
    console.log("\n".repeat(Math.max(0, linhasTopo)));

    this.spriteGrid.forEach(linha => {
      let linhaTerminal = "";
      linha.forEach(char => {
        linhaTerminal += this.obterPixelColorido(char);
      });
      console.log(linhaTerminal);
    });

    console.log("\n".repeat(alturaPulo));
    console.log(`${COR.preto}${"█".repeat(72)}${COR.reset}`);
  }

  public pular(): void {
    for (let altura = 0; altura <= this.alturaMaximaPulo; altura++) {
      this.desenhar(altura);
      if (altura === this.alturaMaximaPulo) {
        console.log(`\n  ${this.nome} atingiu o topo do pulo! 🍄`);
        this.sleep(150);
      } else {
        console.log(`\n  ${this.nome} subindo...`);
        this.sleep(this.velocidadePuloMs);
      }
    }

    for (let altura = this.alturaMaximaPulo - 1; altura >= 0; altura--) {
      this.desenhar(altura);
      if (altura === 0) {
        console.log(`\n  ${this.nome} aterrissou com impacto! 👟`);
      } else {
        console.log(`\n  ${this.nome} descendo...`);
        this.sleep(this.velocidadePuloMs);
      }
    }
    this.sleep(800);
  }
}

// ============================================================
// GRID BASE — 18 colunas × 29 linhas
// Anatomia: boné 4 linhas | rosto 8 | pescoço 1 | tronco 8
//           pernas 5 | sapatos 3
// ============================================================
const GRID_BASE: string[][] = [
  // 0  topo da copa do boné
  [".", ".", ".", ".", ".", ".", ".", "K", "K", "K", "K", ".", ".", ".", ".", ".", ".", "."],
  // 1  copa - 2 brancos
  [".", ".", ".", ".", ".", "K", "K", "C", "C", "C", "C", "K", "K", ".", ".", ".", ".", "."],
  // 2  copa - 4 brancos
  [".", ".", ".", ".", "K", "C", "C", "C", "W", "W", "C", "C", "C", "K", ".", ".", ".", "."],
  // 3  copa + início da aba
  [".", ".", ".", "K", "C", "C", "C", "W", "W", "W", "W", "C", "C", "C", "K", ".", ".", "."],
  // 4  ABA do boné (projeta para os lados 6)
  [".", ".", "K", "C", "C", "C", "K", "K", "K", "K", "K", "K", "C", "C", "C", "K", ".", "."],
  // 5  ABA do boné (projeta para os lados 8)
  [".", ".", "K", "C", "C", "K", "K", "K", "K", "K", "K", "K", "K", "C", "C", "K", ".", "."],
  // 6  ABA do boné (projeta para os lados 10)
  [".", ".", "K", "C", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "C", "K", ".", "."],
  // 7  OLHOS — branco 2x2
  [".", ".", "K", "C", "K", "K", "W", "W", "B", "B", "W", "W", "K", "K", "C", "K", ".", "."],
  // 8  OLHOS — branco 1x1, pupila preta 1x1 - 2ª linha
  [".", ".", "K", "K", "B", "B", "W", "K", "B", "B", "K", "W", "B", "B", "K", "K", ".", "."],
  // 9  OLHOS e ORELHAS
  [".", "K", "B", "K", "B", "B", "W", "K", "B", "B", "K", "W", "B", "B", "K", "B", "K", "."],
  // 10 ORELHAS E CALVANHAQUE
  [".", "K", "B", "K", "K", "B", "B", "B", "B", "B", "B", "B", "B", "K", "K", "B", "K", "."],
  // 11 BIGODE — pontas subindo
  [".", ".", "K", "K", "B", "K", "K", "B", "B", "B", "B", "K", "K", "B", "K", "K", ".", "."],
  // 12 BIGODE — faixa larga
  [".", ".", ".", "K", "B", "K", "K", "K", "K", "K", "K", "K", "K", "B", "K", ".", ".", "."],
  // 13 queixo — linha inferior do rosto
  [".", ".", ".", ".","K", "B", "K", "K", "K", "K", "K", "K", "B", "K", ".", ".", ".", "."],
  // 14 QUEIXO
  [".", ".", ".", ".",".", "K", "B", "B", "B", "B", "B", "B", "K", ".", ".", ".", ".", "."],
  // 15 ombros + mangas
  [".", ".", "K", "K", "K", "C", "K", "K", "K", "K", "K", "K", "C", "K", "K", "K", ".", "."],
  // 16 alças do macacão — tiras do macacão
  [".", "K", "C", "C", "C", "C", "M", "M", "C", "C", "M", "M", "C", "C", "C", "C", "K", "."],
  // 17 peito — BOTÕES 2x2
  ["K", "C", "K", "K", "C", "C", "Y", "Y", "C", "C", "Y", "Y", "C", "C", "K", "K", "C", "K"],
  // 18 BOTÕES 2x2 — LUVAS
  [".", "K", "W", "W", "K", "M", "Y", "Y", "M", "M", "Y", "Y", "M", "K", "W", "W", "K", "."],
  // 19 LUVAS — linha inferior
  ["K", "W", "W", "W", "W", "K", "M", "M", "M", "M", "M", "M", "K", "W", "W", "W", "W", "K"],
  // 20 luvas + tronco
  ["K", "W", "W", "W", "W", "K", "M", "M", "M", "M", "M", "M", "K", "W", "W", "W", "W", "K"],
  // 21 luvas + tronco
  [".", "W", "W", "W", "K", "M", "M", "M", "M", "M", "M", "M", "M", "K", "W", "W", "W", "K"],
  // 22 base das luvas
 [".", "K", "K", "K", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "K", "K", "K", "."],
  // 23 pernas
  [".", ".", ".", "K", "M", "M", "M", "K", "K", "K", "K", "M", "M", "M", "K", ".", ".", "."],
  // 24 pernas
  [".", ".", ".", "K", "M", "M", "M", "K", ".", ".", "K", "M", "M", "M", "K", ".", ".", "."],
  // 25 tornozelo
  [".", ".", ".", "K", "M", "M", "M", "K", ".", ".", "K", "M", "M", "M", "K", ".", ".", "."],
  // 26 sapatos
  [".", ".", "K", "S", "S", "S", "S", "K", ".", ".", "K", "S", "S", "S", "S", "K", ".", "."],
  // 27 sapatos
  [".", "K", "S", "S", "S", "S", "S", "K", ".", ".", "K", "S", "S", "S", "S", "S", "K", "."],
  // 28 sola
  [".", "K", "K", "K", "K", "K", "K", "K", ".", ".", "K", "K", "K", "K", "K", "K", "K", "."],
];

// ============================================================
// SUBCLASSE MARIO — baixo e robusto, boné sem emblema
// ============================================================
class Mario extends Personagem {
  constructor() {
    super("Mario", 5, 40, COR.vermelho, COR.azul, GRID_BASE.map(l => [...l]));
  }
}

// ============================================================
// SUBCLASSE LUIGI — mais alto, magro, emblema branco no boné
// ============================================================
class Luigi extends Personagem {
  private static gridLuigi(): string[][] {
    const grid = GRID_BASE.map(l => [...l]);

    // Emblema branco 2x2 no centro da copa do boné
    grid[1][8] = "W";

    grid[1][9] = "W";
    grid[2][8] = "W";
    grid[2][9] = "W";

    // Estica o tronco: duplica a linha das pernas (24) para que o tronco fique mais longo, mantendo a proporção do corpo do Luigi
    // → Luigi fica 2 pixels mais alto que Mario
    grid.splice(24, 0, [...grid[24]]);

    return grid;
  }

  constructor() {
    super("Luigi", 8, 70, COR.verde, COR.azul, Luigi.gridLuigi());
  }
}

// ============================================================
// CONTROLE DO TERMINAL
// ============================================================
function esperarEnter(mensagem: string): Promise<void> {
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

// ============================================================
// EXECUÇÃO PRINCIPAL
// ============================================================
async function iniciarJogo() {
  const mario = new Mario();
  const luigi = new Luigi();

  console.clear();
  await esperarEnter("Pressione [ENTER] para ver o MARIO...");
  mario.pular();

  console.log("\n");
  await esperarEnter("Pressione [ENTER] para ver o LUIGI...");
  luigi.pular();
}

iniciarJogo();