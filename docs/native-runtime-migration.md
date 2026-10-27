# Migração para runtime Android nativo real

A branch [`native-runtime`](https://github.com/Arthur1010885/window-Mobile/tree/native-runtime) foi publicada a partir do [Winlator-Ludashi](https://github.com/StevenMXZ/Winlator-Ludashi) e recebeu a identidade NexTerra Mobile. Ela mantém o runtime Android/NDK que já empacota Wine, Box86/Box64, FEXCore, DXVK, VKD3D, PulseAudio, containers, atalhos e display XServer.

## O que significa “kernel real”

Um APK não substitui o kernel Android. A execução real usa o kernel, os drivers e a GPU do próprio aparelho. Um kernel customizado exigiria uma imagem de boot/ROM específica por modelo, bootloader desbloqueado e instalação fora do APK. A branch nativa portanto usa o kernel Android real e modifica a camada de compatibilidade em espaço de usuário, que é o modelo usado pelos projetos de referência.

## Base escolhida

O Winlator original é a referência mais direta: ele é um aplicativo Android com Wine e Box86/Box64 e está sob LGPL-2.1. O fork Bionic/Ludashi é mais conveniente para esta adaptação porque documenta containers x86_64 e Arm64EC com FEXCore, mantém um projeto Gradle/NDK compilável e fornece workflow Android. O código da base informa licença MIT para a camada do projeto, mas os componentes empacotados continuam com licenças próprias; por isso, a branch mantém créditos e deve preservar os avisos de terceiros.

O OpenNative é uma alternativa mais ampla, com Wine/Proton, DXVK, VKD3D, Mesa, Box64 e FEX, mas está sob GPL-3.0 e exigiria uma migração maior. O driver Turnip Android consultado é útil principalmente para Adreno 6xx/7xx/8xx; ele não resolve sozinho o caminho gráfico de aparelhos MediaTek/Mali.

## Estado desta entrega

A `main` continua sendo o protótipo Expo, útil para a UI e o modo desktop. A `native-runtime` é a base Android real separada para build e validação. Ela foi renomeada para NexTerra Mobile, usa `com.nexterra.mobile` e possui workflow próprio para APK arm64-v8a. Ainda não afirmo que um APK nativo está pronto sem o workflow concluir com sucesso em um ambiente Android/NDK.

## Fontes

- [Winlator original](https://github.com/brunodev85/winlator)
- [Winlator Bionic/Ludashi](https://github.com/StevenMXZ/Winlator-Ludashi)
- [OpenNative](https://github.com/RemiPelloux/OpenNative)
- [Driver Mesa Turnip Android](https://github.com/nihui/mesa-turnip-android-driver)
