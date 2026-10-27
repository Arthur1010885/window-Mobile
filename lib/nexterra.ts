import Constants from "expo-constants";
import { Platform } from "react-native";

export type Language = "pt-BR" | "en-US";
export type PerformanceProfile = "eco" | "balanced" | "turbo";
export type GameStatus = "ready" | "tuning" | "native";

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
    home: "Área de trabalho",
    library: "Jogos",
    settings: "Config.",
    greeting: "Seu hardware, sem adivinhação.",
    subtitle: "Um cockpit Windows portátil, transparente e configurável.",
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
  },
  "en-US": {
    home: "Desktop",
    library: "Games",
    settings: "Settings",
    greeting: "Your hardware, no guesswork.",
    subtitle: "A transparent, configurable Windows cockpit for mobile.",
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
