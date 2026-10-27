# Native bridge / Ponte nativa

## Estado atual

O app gerenciado é Expo/React Native e não inclui um runtime Windows. A UI usa estados explícitos (`native`, `tuning`, `ready`) para não afirmar que um jogo executa só porque foi cadastrado.

## Contrato proposto

A ponte nativa deverá expor um único módulo Android chamado `NexTerraNative` com funções pequenas:

```ts
export type NativeDeviceReport = {
  model: string;
  androidApi: number;
  abi: "arm64-v8a" | "armeabi-v7a" | "x86_64";
  cpu: { model: string; cores: number; frequencyMhz?: number };
  gpu: { vendor?: string; renderer?: string; vulkan: boolean };
  memory: { totalMb: number; availableMb: number };
};

export type RuntimeStatus = "missing" | "installing" | "ready" | "error";

export interface NexTerraNative {
  getDeviceReport(): Promise<NativeDeviceReport>;
  getRuntimeStatus(): Promise<{ wine: RuntimeStatus; dxvk: RuntimeStatus; box64: RuntimeStatus }>;
  validatePrefix(prefixPath: string): Promise<{ ok: boolean; reason?: string }>;
  launchWindowsApp(input: { prefixPath: string; exePath: string; args: string[] }): Promise<{ pid: number }>;
  stopWindowsApp(pid: number): Promise<void>;
}
```

## Sequência de integração

1. Implementar coleta segura de dados com Kotlin/NDK, sem root e sem alterar governor do kernel.
2. Identificar ABI e driver Vulkan antes de sugerir DXVK.
3. Empacotar Wine/Box64/DXVK separadamente, respeitando suas licenças e evitando binários proprietários.
4. Criar prefixo por jogo com diretório isolado e permissões mínimas.
5. Expor logs e falhas na UI; nunca marcar `ready` sem validação real.
6. Testar em aparelhos ARM64 de GPUs Adreno, Mali e PowerVR antes de habilitar o botão Executar.

## Segurança e licenças

Não é permitido baixar DLLs aleatórias, jogos, BIOS ou executáveis de terceiros. O usuário deverá fornecer seus próprios arquivos e aceitar as licenças. A camada nativa precisa ter revisão de permissões, limites de armazenamento, cancelamento de instalação e recuperação de falhas.

## Por que não está nesta primeira entrega?

Um runtime Windows funcional em Android não é uma dependência JavaScript simples: exige NDK, binários por ABI, integração gráfica, armazenamento de prefixos, input, áudio, permissões e testes por driver. Entregar uma tela que dissesse “rodando” sem essa validação seria enganoso. A versão 0.1 deixa a UI e o contrato prontos para uma implementação nativa separada.
