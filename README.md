# NexTerra Mobile

> **Modo PC portátil para Android.** Um cockpit leve para diagnosticar o aparelho, ajustar perfis de desempenho e organizar jogos Windows — com uma ponte nativa Wine/DXVK/Box64 preparada para uma etapa posterior.

[Português](#português) · [English](#english)

## Português

O NexTerra Mobile transforma o celular em uma área de trabalho de jogos configurável. A versão atual já entrega desktop visual com wallpaper escuro, identidade própria, diagnóstico do modelo disponível no Expo, perfis Eco/Equilibrado/Turbo, recomendação gráfica, assistente em cinco passos, biblioteca de jogos e seletor de idioma PT-BR/EN-US com bandeiras.

A execução de arquivos `.exe` ainda não está habilitada nesta versão. O app não finge ter Wine funcionando: o contrato modular para Wine, DXVK e Box64 está em `docs/native-bridge.md`, pronto para receber um módulo Android NDK testado por arquitetura e GPU.

### Começar

```bash
pnpm install
pnpm db:push
pnpm dev
```

Abra o projeto pelo Preview Expo ou com Expo Go. A porta Metro é `8081` e a API do starter é `3000`; elas são fixas pela infraestrutura do projeto.

### Estrutura

`app/` contém as rotas Expo Router. `lib/nexterra.ts` concentra o tema, traduções, presets e diagnóstico. `lib/nexterra-state.tsx` guarda o estado de idioma, perfil e assistente. `docs/` registra limites e o contrato da integração nativa. `.github/workflows/android-release.yml` prepara o build Android com EAS.

### APK e release

O build Android não deve ser executado dentro do processo Metro. Configure `EXPO_TOKEN` como secret do GitHub e envie uma tag `v*`; o workflow `Android Release` executa o EAS, baixa o APK e cria a GitHub Release automaticamente. Um disparo manual apenas valida o build. Sem o secret, não existe APK publicado por este repositório.

### Licenças e referências

O NexTerra é uma interface original. A futura camada Windows deverá respeitar as licenças de Wine, DXVK, Box64 e de qualquer runtime distribuído. Não inclua DLLs, jogos, BIOS ou binários de terceiros sem verificar a licença e a redistribuição.

## English

NexTerra Mobile turns an Android phone into a configurable gaming desktop. The current version includes a dark Windows-inspired desktop, original branding, Expo device detection, Eco/Balanced/Turbo profiles, graphics recommendations, a five-step setup assistant, a Windows game library and PT-BR/EN-US language switching with flags.

`.exe` execution is not enabled yet. NexTerra does not pretend that Wine is already working: `docs/native-bridge.md` defines the modular Android NDK contract for a future, device-tested Wine/DXVK/Box64 layer.

### Getting started

```bash
pnpm install
pnpm db:push
pnpm dev
```

Open the project in the Expo Preview or Expo Go. Metro runs on `8081` and the starter API on `3000`; these ports are fixed by the managed project.

### APK and release

Do not run an Android release build inside the resident Metro process. Configure `EXPO_TOKEN` as a GitHub secret and push a `v*` tag; `Android Release` runs EAS, downloads the APK and creates the GitHub Release automatically. A manual dispatch only validates the build. Without the secret, this repository does not publish a fake APK.

### License notes

NexTerra is an original interface. The future Windows layer must comply with the licenses of Wine, DXVK, Box64 and every bundled runtime. Do not ship third-party DLLs, games, BIOS files or binaries without checking redistribution rights.

## Status

**v0.1.0 — interface foundation.** The managed Expo project is ready for preview and source publication. Native Wine/DXVK/Box64 execution and a signed APK remain explicit follow-up work.
