import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

// Códigos de escape ANSI para cores no terminal
const CORES = {
    reset: "\x1b[0m",
    verde: "\x1b[32m",   // Jogador
    vermelho: "\x1b[31m", // Inimigo
    amarelo: "\x1b[33m",  // Item de Cura
    azul: "\x1b[34m",     // Saída
    cinza: "\x1b[90m"     // Paredes
};

// Configuração inicial do jogo
let jogadorX = 1;
let jogadorY = 1;
let jogoRodando = true;

// Definição da matriz do mapa (10x10)
// # = Parede, . = Caminho, X = Inimigo, H = Item de Cura, E = Saída
const mapaBase = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '#', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '.', '#', '.', '#', '#', '.', '#'],
    ['#', '.', '#', '.', '.', '.', '.', '#', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '.', '#', '.', '#'],
    ['#', '.', '.', '.', 'H', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '.', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '.', '.', 'X', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 'E', '#']
];

function desenharMapa() {
    console.clear(); // Limpa o terminal para dar efeito de animação
    console.log("=========================================");
    console.log("      CLI QUEST: ARENA DOS CARACTERES    ");
    console.log("=========================================\n");

    for (let i = 0; i < mapaBase.length; i++) {
        let linhaImpressao = "";
        for (let j = 0; j < mapaBase[i].length; j++) {
            
            // Verifica se é a posição atual do jogador
            if (i === jogadorX && j === jogadorY) {
                linhaImpressao += CORES.verde + "@ " + CORES.reset;
            } else {
                // Renderiza cada caractere com sua cor respectiva
                switch (mapaBase[i][j]) {
                    case '#':
                        linhaImpressao += CORES.cinza + "# " + CORES.reset;
                        break;
                    case 'X':
                        linhaImpressao += CORES.vermelho + "X " + CORES.reset;
                        break;
                    case 'H':
                        linhaImpressao += CORES.amarelo + "♥ " + CORES.reset;
                        break;
                    case 'E':
                        linhaImpressao += CORES.azul + "E " + CORES.reset;
                        break;
                    default:
                        linhaImpressao += ". ";
                }
            }
        }
        console.log(linhaImpressao);
    }
    console.log("\n=========================================");
    console.log(" Comandos: [W] Cima | [S] Baixo | [A] Esq | [D] Dir | [Q] Sair");
    console.log("=========================================");
}

// Loop Principal do Jogo (Game Loop)
while (jogoRodando) {
    desenharMapa();
    
    // Captura e validação básica da entrada
    let entrada = prompt("Digite sua ação: ");
    let acao = entrada.trim().toUpperCase();

    let proximoX = jogadorX;
    let proximoY = jogadorY;

    if (acao === 'Q') {
        console.log("Você saiu do jogo!");
        jogoRodando = false;
        break;
    }

    switch (acao) {
        case 'W': proximoX--; break; // Cima
        case 'S': proximoX++; break; // Baixo
        case 'A': proximoY--; break; // Esquerda
        case 'D': proximoY++; break; // Direita
        default:
            prompt("Comando inválido! Pressione Enter para tentar novamente...");
            continue;
    }

    // Validação de colisão com as bordas e com paredes do cenário
    if (mapaBase[proximoX][proximoY] !== '#') {
        jogadorX = proximoX;
        jogadorY = proximoY;
    } else {
        prompt("Bloqueado! Você colidiu com uma parede. [Enter]");
        continue;
    }

    // Validação do objetivo final
    if (mapaBase[jogadorX][jogadorY] === 'E') {
        desenharMapa();
        console.log("\n🎉 Parabéns! Você encontrou a saída da masmorra!");
        jogoRodando = false;
    }
}
