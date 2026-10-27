# NexTerra Mobile — TODO

## Interface de modo PC e identidade

- [x] Entregar uma área de trabalho mobile com wallpaper escuro, marca NexTerra, janelas visuais, dock e menu de aplicativos.
- [x] Manter uma interface leve, otimizada para portrait e uso com uma mão, com nome criativo e identidade própria.

## Diagnóstico e otimização

- [x] Exibir o modelo disponível pelas APIs Expo, Android, versão do sistema e uma indicação honesta dos campos que dependem da ponte nativa.
- [x] Oferecer perfis Eco, Equilibrado e Turbo, com explicação do impacto e possibilidade de trocar/restaurar o perfil.
- [x] Exibir recomendação gráfica baseada no diagnóstico sem prometer FPS ou compatibilidade não validada.

## Configuração guiada e idiomas

- [x] Incluir assistente em etapas para idioma, diagnóstico, desempenho, GPU e conclusão.
- [x] Incluir português do Brasil e inglês com países e bandeiras.
- [x] Persistir idioma e preferências durante a sessão com estado compartilhado.

## Biblioteca e integração Windows

- [x] Criar biblioteca para jogos/aplicativos Windows com pesquisa, favoritos, categoria e estado de compatibilidade.
- [x] Documentar contrato modular futuro para Wine, DXVK e Box64, sem fingir que `.exe` já executa nesta versão.

## Código público e release

- [x] Adicionar README bilíngue, documentação de arquitetura, instruções de desenvolvimento e changelog versionado.
- [x] Adicionar fluxo de GitHub Actions para gerar APK de release por EAS quando `EXPO_TOKEN` estiver configurado.
- [ ] Gerar e anexar um APK real ao GitHub Release após executar o build Android no Dashboard/EAS.
- [ ] Implementar o módulo nativo de Wine/DXVK/Box64 e validar em aparelhos reais com GPUs diferentes.
