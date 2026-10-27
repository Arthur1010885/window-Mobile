# UI references / Referências de interface

A simplificação desta versão usa padrões de interação observados em projetos públicos, sem copiar código, assets ou identidade visual.

O [Winlator](https://github.com/brunodev85/winlator) organiza a experiência em containers, atalhos de jogos e ajustes por atalho. O README também destaca presets do Box64 em configurações avançadas e variáveis de ambiente por jogo. A decisão aplicada no NexTerra é colocar os atalhos na tela inicial e deixar a otimização detalhada em Ajustes, em vez de ocupar o primeiro painel com muitas métricas.

O fluxo descrito no [guia do XDA](https://www.xda-developers.com/winlator-guide/) confirma a utilidade de criar atalhos a partir do `.exe` e depois ajustar o jogo pela seção de atalhos. Isso inspirou a estrutura “Atalhos → Biblioteca → Ajustes por perfil”, mas a execução `.exe` permanece desabilitada até existir a ponte nativa real.

O [WinHub](https://github.com/winhub-emu/winhub) usa a ideia de frontend central para bibliotecas e publica builds por GitHub Actions/Release. No NexTerra, essa ideia aparece como uma Biblioteca enxuta e um workflow de APK separado; não copiamos a implementação Android, os binários ou a licença do projeto.

## Decisões de produto

- A tela inicial agora prioriza atalhos e a ação “Adicionar jogo”.
- Diagnóstico fica compacto, como uma faixa do aparelho, e não como um dashboard técnico.
- Presets Snapdragon/Adreno e MediaTek/Mali são recomendações de software, não alterações de governor, clock, kernel ou temperatura.
- Quando o modelo/chipset não for lido pela ponte nativa, o usuário pode escolher a família manualmente.
- Cada preset explica CPU, GPU/API gráfica e o impacto esperado sem prometer FPS.
