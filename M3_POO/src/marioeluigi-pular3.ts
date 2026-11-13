import * as readline from 'readline';

// CLASSE MÃE (Abstrata / Base)
abstract class Personagem {
  nome: string;
  vidas: number;
  pontos: number;
  
  // Atributos protegidos que as subclasses vão customizar
  protected cor: string;
  protected resetCor = "\x1b[0m";
  protected alturaMaximaPulo: number;
  protected velocidadePuloMs: number;

  // Matriz de desenho compartilhada
  private matrizSprite = [
    "  MMMMM  ",
    " MMMMMMM ",
    " BBBOBBB ",
    " MMMBMMM ",
    "  XXXXX  ",
    "  XX XX  ",
    "  TT TT  "
  ];

  constructor(nome: string, alturaMaxima: number, velocidadeMs: number, codigoCor: string) {
    this.nome = nome;
    this.vidas = 3;
    this.pontos = 0;
    this.alturaMaximaPulo = alturaMaxima;
    this.velocidadePuloMs = velocidadeMs;
    this.cor = codigoCor;
  }

  private sleep(ms: number): void {
    const start = Date.now();
    while (Date.now() - start < ms) {}
  }

  // Método de renderização gráfica na tela
  private desenhar(alturaPulo: number = 0): void {
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
        } else if (char === "B") {
          linhaColorida += "\x1b[37m██\x1b[0m";
        } else if (char === "O") {
          linhaColorida += "\x1b[30m██\x1b[0m";
        } else if (char === "X") {
          linhaColorida += "\x1b[34m██\x1b[0m";
        } else if (char === "T") {
          linhaColorida += "\x1b[33m██\x1b[0m";
        } else {
          linhaColorida += "  ";
        }
      }
      console.log(linhaColorida);
    });

    console.log("\n".repeat(alturaPulo));
    console.log("██████████████████████████████████████████");
  }

  // Método principal que executa a física do pulo usando os atributos customizados
  public pular(): void {
    // Subida
    for (let altura = 0; altura <= this.alturaMaximaPulo; altura++) {
      this.desenhar(altura);
      if (altura === this.alturaMaximaPulo) {
        console.log(`\n  ${this.nome} atingiu o topo do pulo! 🍄`);
        this.sleep(150); 
      } else {
        console.log(`\n  ${this.nome} subindo correndo...`);
        this.sleep(this.velocidadePuloMs);
      }
    }

    // Descida
    for (let altura = this.alturaMaximaPulo - 1; altura >= 0; altura--) {
      this.desenhar(altura);
      if (altura === 0) {
        console.log(`\n  ${this.nome} aterrissou com impacto! 👟`);
      } else {
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