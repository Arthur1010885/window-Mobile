# Plano de implementação — NexTerra Mobile

## Escopo desta versão

NexTerra Mobile é uma experiência Android de “modo PC” para organizar e preparar jogos Windows no celular. A primeira versão entrega uma interface funcional e leve, com desktop visual inspirado em Windows, diagnóstico honesto do aparelho, perfis de otimização seguros, assistente guiado, biblioteca e seletor bilíngue. A execução de `.exe` não é simulada: a integração com Wine, DXVK e Box64 fica documentada como ponte nativa futura.

## Arquitetura

- `app/`: rotas Expo Router. A aba Início é o desktop; Jogos é a biblioteca; Config. é o centro de ajustes; `setup` é o assistente modal.
- `components/`: componentes visuais pequenos e reutilizáveis, com estética “glass desktop”.
- `lib/nexterra.ts`: tipos, tema, presets de desempenho, catálogo inicial e snapshot de diagnóstico.
- `lib/nexterra-state.tsx`: estado compartilhado de idioma, perfil, assistente e preferências de interface.
- `docs/`: limites atuais e contrato de integração nativa com Wine/DXVK/Box64.
- `.github/workflows/`: fluxo de build Android de release via Expo Application Services, pronto para receber `EXPO_TOKEN` no GitHub.

## Design

### Movimentos considerados

1. “Glass desktop” mobile-first — 0,06
2. Neon arcade maximalista — 0,04
3. Utilitário monocromático industrial — 0,08

### Escolha: Glass desktop mobile-first

**Movimento:** desktop futurista compacto, com profundidade de vidro e referências discretas ao Windows, sem copiar marcas ou assets proprietários.

**Princípios:** legibilidade em uma mão; informação de hardware em primeiro plano; controles reversíveis; estados técnicos transparentes.

**Filosofia de cor:** fundo azul-noite quase preto para sugerir uma área de trabalho; ciano elétrico como cor própria da marca e sinal de saúde; violeta para camadas e ações secundárias; âmbar apenas para avisos.

**Paradigma de layout:** cabeçalho de diagnóstico flutuante, cards assimétricos e uma dock inferior persistente, evitando uma grade pesada.

**Assinaturas:** marca “N” formada por dois cortes diagonais; halo ciano atrás dos cards; barra inferior com brilho de seleção.

**Interação:** toque curto para abrir uma área, alternância clara para ativar perfis e CTA primário sempre reversível. O assistente mostra o próximo passo sem esconder o que ainda não é suportado.

**Animação:** apenas transições de opacidade/escala leves; nenhuma animação contínua pesada para poupar bateria e manter a interface fluida em aparelhos modestos.

**Tipografia:** sistema nativo do dispositivo, com títulos em peso forte e labels compactos em caixa alta; evita baixar fontes e reduz o tamanho do APK.

**Essência:** um cockpit de jogos Windows para transformar o celular em uma estação portátil configurável — transparente, técnico e acolhedor.

**Voz:** direta, calma e útil. Exemplos: “Seu hardware, sem adivinhação.” e “Escolha o perfil. O NexTerra explica o impacto.”

**Wordmark:** “NexTerra” com o “N” dividido por um raio; a marca é aplicada como símbolo vetorial desenhado em Views, sem dependência externa.

**Cor proprietária:** `#35E0D0` (NexTerra Cyan).

## Restrições técnicas

O starter Expo é fixo. O app não altera portas, não coloca credenciais no bundle e não promete execução de Windows antes de existir um módulo nativo validado. CPU/GPU detalhadas não expostas pelo Expo Go aparecem como “ponte nativa pendente”, evitando inventar especificações.
