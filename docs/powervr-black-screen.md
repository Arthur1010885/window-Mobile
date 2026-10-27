# Tela preta em PowerVR Rogue GE8322

A captura com `PowerVR Rogue GE8322`, `GPU N/A` e `FPS 0` indica que o container abriu, mas o caminho Vulkan/DXVK não conseguiu apresentar os frames. Isso não é uma falha do arquivo do FNaF em si.

## Configuração imediata

No container usado pelo jogo, abra as configurações de vídeo/runtime e use:

1. **Renderer:** `EGL`.
2. **Graphics driver:** `System`.
3. **DirectX wrapper:** `WineD3D`.
4. **WineD3D renderer:** `gl`.
5. **DDraw wrapper:** tente `CnC-DDraw` para FNaF antigo; se não abrir, use `WineD3D`.
6. **DXVK/VKD3D:** desative para esse container.
7. **Resolução:** comece com `800x600` ou `1280x720`, sem fullscreen forçado.
8. Feche e abra o container novamente antes de testar o executável.

Turnip é um driver destinado principalmente à família Adreno/Qualcomm e não deve ser selecionado para PowerVR. O driver PowerVR aberto do Mesa informa suporte limitado por hardware e recomenda cautela fora dos dispositivos conformantes; o GE8322 pode depender do driver do fabricante e apresentar Vulkan incompleto. Veja a [documentação PowerVR do Mesa](https://docs.mesa3d.org/drivers/powervr.html).

## Correção automática no NexTerra

A branch [`native-runtime`](https://github.com/Arthur1010885/window-Mobile/tree/native-runtime) recebeu detecção de PowerVR/Rogue. A partir do próximo APK, novos containers nesse tipo de GPU iniciam com EGL/OpenGL + WineD3D, sem Turnip e sem DXVK Vulkan por padrão. O build corrigido é a versão `0.1.1-native`.

A base também tem um histórico de ajustes específicos para PowerVR no [Winlator-Ludashi](https://github.com/StevenMXZ/Winlator-Ludashi/issues/214), então a compatibilidade depende do modelo, BVNC, driver Android e jogo.
