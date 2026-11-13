# Desenvolvido por: Edlange Lopes da Silva
# Módulo 3: Programação Orientada a Objetos & TypeScript
# Programa: Jovem Tech 2026.1
## Tema: Super Mario Bros – Sistema de Personagens e Power-ups

Projeto desenvolvido como exemplo prático e didático para o **Módulo 3: Programação Orientada a Objetos (POO) & TypeScript** do Programa Jovem Tech (Trilha Básica). O objetivo é demonstrar os **Fundamentos e os 4 pilares da Programação Orientada a Objetos** utilizando TypeScript, com uma abordagem lúdica e visual baseada no universo de *Super Mario Bros*.

---

## Objetivo do Projeto

Ensinar os conceitos fundamentais de POO de forma clara e aplicada, utilizando:

- **Encapsulamento**
- **Herança**
- **Polimorfismo**
- **Abstração**

O projeto foi estruturado para ser **fácil de entender** por iniciantes, com códigos bem comentados e exemplos visuais do jogo Super Mario.

---

### Descrição do Projeto

Este projeto foi desenvolvido como parte da aula prática do **Módulo 3 – Programação Orientada a Objetos & TypeScript** do Programa Jovem Tech 2026.1.

O objetivo é demonstrar, de forma didática e aplicada, os **4 pilares da Programação Orientada a Objetos** utilizando TypeScript, tendo como tema o universo de **Super Mario Bros**.


# Objetivos de Aprendizagem

Compreender e aplicar os 4 pilares da Programação Orientada a Objetos
Utilizar classes, herança, interfaces e polimorfismo em TypeScript
Organizar código de forma modular e escalável
Demonstrar a aplicação prática dos conceitos em um cenário lúdico e visual

# Contexto da Avaliação

Este projeto foi desenvolvido para a Aula Prática/Demonstrativa do Edital de Seleção de Instrutores do Programa Jovem Tech 2026.1, na trilha Básica – Módulo 3.

# Metodologia aplicada:

Project Based Learning (PBL)

### Problema Gerador

> A Nintendo precisa desenvolver um sistema para o próximo jogo da franquia *Super Mario Bros*. O sistema deve permitir o cadastro e gerenciamento de diferentes tipos de personagens (heróis e inimigos), controlar power-ups e garantir que novas mecânicas possam ser adicionadas facilmente no futuro, mantendo o código organizado, seguro e de fácil manutenção.

### Pilares da POO Demonstrados

| Pilar              | Conceito                                | Exemplo no Projeto                               |
|--------------------|-----------------------------------------|--------------------------------------------------|
| **Encapsulamento** | Proteção dos dados internos             | Atributo `vida` protegido (`protected`)          |
| **Herança**        | Reutilização de código                  | `Mario` herda de `Personagem`                    |
| **Polimorfismo**   | Mesmo método, comportamentos diferentes | `atacar()` em `Goomba` e `KoopaTroopa`           |
| **Abstração**      | Contratos e modelos gerais              | Classe abstrata `Inimigo` + Interface `IPowerUp` |

### Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **tsx** (para execução e watch mode)

### Estrutura do Projeto

modulo3-poo-typescript/
├── src/
│   ├── models/
│   │   ├── Personagem.ts
│   │   ├── Mario.ts
│   │   ├── Inimigo.ts
│   │   ├── Goomba.ts
│   │   ├── KoopaTroopa.ts
│   │   └── MarioFogo.ts
│   ├── interfaces/
│   │   └── IPowerUp.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md


### Como Executar o Projeto

1. Instale as dependências:
> ```bash
>   npm install


2. Execute o projeto em modo de desenvolvimento:
>   npm run dev

Objetivo                        Melhor forma                Comando / Ação 
------------------------------  --------------------------  ----------------------------
Rodar normalmente               Terminal integrado          npm run dev
Explicar passo a passo          Terminal + arquivo aberto   npm run dev + rolar código
Controle total (avançar linha)  Debugger do VS Code         F5 + breakpoints


3. Gere a versão compilada (Opcional):

Código
>   npm run build
>   npm start

4. Para parar a execução no Terminal (macOS):
> Pressione Ctrl + C
> Pressione Ctrl + Z → pausa o processo (fica suspenso, não para de vez).