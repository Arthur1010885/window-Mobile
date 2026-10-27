import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { ChipsetFamily, Language, PerformanceProfile, translations } from "@/lib/nexterra";

type NexTerraContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  profile: PerformanceProfile;
  setProfile: (profile: PerformanceProfile) => void;
  chipset: ChipsetFamily;
  setChipset: (chipset: ChipsetFamily) => void;
  chipsetProfileId: string;
  setChipsetProfileId: (id: string) => void;
  setupVisible: boolean;
  setSetupVisible: (visible: boolean) => void;
  t: (key: keyof (typeof translations)["pt-BR"]) => string;
};

const NexTerraContext = createContext<NexTerraContextValue | null>(null);

export function NexTerraProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [profile, setProfile] = useState<PerformanceProfile>("balanced");
  const [chipset, setChipset] = useState<ChipsetFamily>("auto");
  const [chipsetProfileId, setChipsetProfileId] = useState("sd-balanced");
  const [setupVisible, setSetupVisible] = useState(false);
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      profile,
      setProfile,
      chipset,
      setChipset,
      chipsetProfileId,
      setChipsetProfileId,
      setupVisible,
      setSetupVisible,
      t: (key: keyof (typeof translations)["pt-BR"]) => translations[language][key],
    }),
    [language, profile, chipset, chipsetProfileId, setupVisible],
  );
  return <NexTerraContext.Provider value={value}>{children}</NexTerraContext.Provider>;
}

export function useNexTerra() {
  const context = useContext(NexTerraContext);
  if (!context) throw new Error("useNexTerra must be used inside NexTerraProvider");
  return context;
}
