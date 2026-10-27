import Constants from "expo-constants";
import { Platform } from "react-native";

export type Language = "pt-BR" | "en-US";
export type PerformanceProfile = "eco" | "balanced" | "turbo";
export type GameStatus = "ready" | "tuning" | "native";
export type ChipsetFamily = "auto" | "snapdragon" | "mediatek";

export const COLORS = {
  bg: "#07111D",
  panel: "#0E1D2C",
  panelRaised: "#14283A",
  panelSoft: "#102234",
  cyan: "#35E0D0",
  cyanDim: "#1A918A",
  violet: "#9D8BFF",
  text: "#F4F8FB",
  muted: "#90A6B8",
  line: "#1C3548",
  amber: "#F4B860",
  green: "#6EE7B7",
  red: "#FF8C8C",
};

export const translations = {
  "pt-BR": {
    home: "Atalhos",
    library: "Jogos",
    settings: "Ajustes",
    greeting: "Seus jogos, direto ao ponto.",
    subtitle: "Abra um atalho, ajuste o perfil e jogue quando a ponte nativa estiver pronta.",
    shortcuts: "Atalhos",
    addShortcut: "Adicionar jogo",
    environments: "Ambientes",
    desktopMode: "Modo desktop",
    openDesktop: "Abrir desktop",
    desktopHint: "Área de trabalho · atalhos · janelas",
    open: "Abrir",
    configure: "Ajustar",
    device: "Meu dispositivo",
    detected: "detecção disponível",
    pending: "ponte nativa pendente",
    optimize: "Otimização rápida",
    recommended: "Recomendado para você",
    openSetup: "Configurar agora",
    viewDetails: "Ver detalhes",
    profile: "Perfil ativo",
    eco: "Eco",
    balanced: "Equilibrado",
    turbo: "Turbo",
    games: "Biblioteca",
    addGame: "Adicionar jogo",
    search: "Pesquisar jogos...",
    noGames: "Nenhum jogo encontrado",
    language: "Idioma",
    appearance: "Aparência",
    dark: "Modo escuro",
    nativeLayer: "Camada Windows",
    notReady: "Integração nativa em preparação",
    openDocs: "Ler documentação",
    reset: "Restaurar padrão",
    setupTitle: "Primeira configuração",
    next: "Continuar",
    back: "Voltar",
    finish: "Concluir",
    stepLanguage: "Idioma",
    stepDevice: "Dispositivo",
    stepPerformance: "Desempenho",
    stepGraphics: "Gráficos",
    stepDone: "Pronto",
    close: "Fechar",
    gpuRecommendation: "GPU recomendada",
    memory: "Memória",
    system: "Sistema",
    cpu: "Processador",
    gpu: "GPU",
    unavailable: "Indisponível no Expo Go",
    chipset: "Família do chipset",
    auto: "Detectar automaticamente",
    snapdragon: "Snapdragon · Adreno",
    mediatek: "MediaTek · Mali",
    chipsetHint: "Escolha manualmente enquanto a ponte nativa não informa a GPU.",
    cpuProfile: "Perfil de CPU",
    gpuProfile: "Perfil de GPU",
    safePreset: "recomendação segura",
    perGame: "por jogo",
  },
  "en-US": {
    home: "Shortcuts",
    library: "Games",
    settings: "Settings",
    greeting: "Your games, no detours.",
    subtitle: "Open a shortcut, tune a profile and play when the native bridge is ready.",
    shortcuts: "Shortcuts",
    addShortcut: "Add game",
    environments: "Environments",
    desktopMode: "Desktop mode",
    openDesktop: "Open desktop",
    desktopHint: "Workspace · shortcuts · windows",
    open: "Open",
    configure: "Tune",
    device: "My device",
    detected: "detection available",
    pending: "native bridge pending",
    optimize: "Quick tuning",
    recommended: "Recommended for you",
    openSetup: "Set up now",
    viewDetails: "View details",
    profile: "Active profile",
    eco: "Eco",
    balanced: "Balanced",
    turbo: "Turbo",
    games: "Library",
    addGame: "Add game",
    search: "Search games...",
    noGames: "No games found",
    language: "Language",
    appearance: "Appearance",
    dark: "Dark mode",
    nativeLayer: "Windows layer",
    notReady: "Native integration in preparation",
    openDocs: "Read documentation",
    reset: "Restore default",
    setupTitle: "First setup",
    next: "Continue",
    back: "Back",
    finish: "Finish",
    stepLanguage: "Language",
    stepDevice: "Device",
    stepPerformance: "Performance",
    stepGraphics: "Graphics",
    stepDone: "Ready",
    close: "Close",
    gpuRecommendation: "Recommended GPU",
    memory: "Memory",
    system: "System",
    cpu: "Processor",
    gpu: "GPU",
    unavailable: "Unavailable in Expo Go",
    chipset: "Chipset family",
    auto: "Auto detect",
    snapdragon: "Snapdragon · Adreno",
    mediatek: "MediaTek · Mali",
    chipsetHint: "Choose manually while the native bridge cannot report the GPU.",
    cpuProfile: "CPU profile",
    gpuProfile: "GPU profile",
    safePreset: "safe recommendation",
    perGame: "per game",
  },
} as const;

export const flags = {
  "pt-BR": "🇧🇷",
  "en-US": "🇺🇸",
} as const;

export const performanceProfiles: Record<PerformanceProfile, { label: string; description: string; accent: string }> = {
  eco: { label: "Eco", description: "Menor consumo e calor para sessões longas.", accent: COLORS.green },
  balanced: { label: "Equilibrado", description: "Ponto de partida seguro para a maioria dos aparelhos.", accent: COLORS.cyan },
  turbo: { label: "Turbo", description: "Mais margem térmica e energia; use com carregador.", accent: COLORS.violet },
};

export type ChipsetProfile = { id: string; title: string; cpu: string; gpu: string; detail: string; accent: string; performance: PerformanceProfile };

export const chipsetProfiles: Record<Exclude<ChipsetFamily, "auto">, ChipsetProfile[]> = {
  snapdragon: [
    { id: "sd-balanced", title: "Snapdragon equilibrado", cpu: "CPU · Balanced", gpu: "Adreno · Vulkan", detail: "Ponto de partida para Adreno; valide o driver Vulkan por jogo.", accent: COLORS.cyan, performance: "balanced" },
    { id: "sd-performance", title: "Snapdragon desempenho", cpu: "CPU · Turbo", gpu: "Adreno · Vulkan alto", detail: "Mais margem de desempenho e calor; recomendado com carregador.", accent: COLORS.violet, performance: "turbo" },
    { id: "sd-battery", title: "Snapdragon bateria", cpu: "CPU · Eco", gpu: "Adreno · OpenGL ES", detail: "Reduz consumo quando a sessão longa importa mais que a qualidade.", accent: COLORS.green, performance: "eco" },
  ],
  mediatek: [
    { id: "mt-balanced", title: "MediaTek equilibrado", cpu: "CPU · Balanced", gpu: "Mali · Vulkan", detail: "Preset inicial para Dimensity/Mali; valide extensões do driver.", accent: COLORS.cyan, performance: "balanced" },
    { id: "mt-performance", title: "MediaTek desempenho", cpu: "CPU · Turbo", gpu: "Mali · Vulkan alto", detail: "Prioriza desempenho sustentado; monitore temperatura do aparelho.", accent: COLORS.violet, performance: "turbo" },
    { id: "mt-battery", title: "MediaTek bateria", cpu: "CPU · Eco", gpu: "Mali · OpenGL ES", detail: "Perfil conservador para aparelhos Helio ou sessões mais longas.", accent: COLORS.green, performance: "eco" },
  ],
};

export const games = [
  { id: "skyrim", title: "The Elder Scrolls V: Skyrim", category: "RPG", status: "tuning" as GameStatus, color: "#7866D8", favorite: true },
  { id: "hades", title: "Hades", category: "Ação", status: "ready" as GameStatus, color: "#D86B65", favorite: true },
  { id: "portal", title: "Portal 2", category: "Puzzle", status: "native" as GameStatus, color: "#43B5C8", favorite: false },
];

export function getDeviceSnapshot() {
  const deviceName = (Constants as typeof Constants & { deviceName?: string }).deviceName;
  const systemVersion = Constants.systemVersion ?? "Android / Preview";
  const isWeb = Platform.OS === "web";
  return {
    model: deviceName || (isWeb ? "Preview Web" : "Android phone"),
    os: `${Constants.platform?.android?.versionCode ? "Android" : Platform.OS === "android" ? "Android" : "Expo"} ${systemVersion}`,
    cpu: "Aguardando ponte nativa",
    gpu: "Aguardando ponte nativa",
    ram: "Aguardando ponte nativa",
    confidence: isWeb ? "Preview" : "Parcial",
  };
}

export function getGpuRecommendation(profile: PerformanceProfile) {
  if (profile === "turbo") return { title: "Vulkan · Alto", score: 82, detail: "Prioriza Vulkan quando a GPU e o driver suportarem." };
  if (profile === "eco") return { title: "OpenGL ES · Econômico", score: 68, detail: "Reduz aquecimento quando Vulkan não estiver disponível." };
  return { title: "Vulkan · Equilibrado", score: 76, detail: "Melhor ponto de partida; valide por jogo e driver." };
}
