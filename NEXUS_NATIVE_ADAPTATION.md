# NexTerra Native Runtime

Esta branch parte do [Winlator-Ludashi](https://github.com/StevenMXZ/Winlator-Ludashi), uma base Android nativa que já contém a execução real por Wine e Box86/Box64, com suporte a containers x86_64 e Arm64EC via FEXCore.

## O que esta base já possui

- Projeto Android/Gradle com Java 17, Android SDK e NDK.
- Wine, Box64/Box86, FEXCore e WOWBox64 em assets/runtime.
- DXVK, VKD3D, D8VK e componentes Wine.
- PulseAudio, controles, XServer display, containers, atalhos e settings por jogo.
- Drivers e bibliotecas gráficas para Adreno/Turnip, Zink e OpenGL.
- Workflow GitHub Actions para gerar APK arm64-v8a.

## Decisão de kernel

Um APK não substitui o kernel Android. Winlator e esta base usam o kernel e os drivers do aparelho. Um kernel customizado exigiria uma imagem de boot/ROM específica por modelo, bootloader desbloqueado e instalação fora do APK. Portanto, o NexTerra Native usa o kernel Android real do aparelho e aplica a camada de compatibilidade em espaço de usuário.

## Adaptação feita nesta branch

- Identidade do aplicativo: NexTerra Mobile.
- Application ID inicial: `com.nexterra.mobile`.
- Nome de versão: `0.1.0-native`.
- Mantida a estrutura interna de pacotes Winlator para reduzir risco durante a primeira migração.
- Créditos e licença upstream preservados; componentes empacotados continuam sujeitos às licenças próprias em `THIRD_PARTY_NOTICES` e nos diretórios originais.

## Próximo passo técnico

A interface Expo da branch `main` deve ser portada para Activities/Fragments/Compose deste runtime depois que o build nativo for validado. A migração não deve remover a inicialização de containers, o XServer, os controles ou a instalação dos componentes. A execução de jogos deve continuar limitada a arquivos e softwares que o usuário possui ou está autorizado a executar.

## Build

O workflow upstream exige JDK 17, Android SDK, NDK e dependências nativas. O build deve ser executado pelo GitHub Actions ou por um ambiente Android configurado; esta Sandbox não deve ser usada para afirmar que um APK nativo foi compilado sem validação real.
