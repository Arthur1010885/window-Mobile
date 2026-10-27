import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Platform } from "react-native";
import { useColors } from "@/hooks/use-colors";
import { useNexTerra } from "@/lib/nexterra-state";

export default function TabLayout() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { t } = useNexTerra();
  const bottomPadding = Platform.OS === "web" ? 12 : Math.max(insets.bottom, 8);
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.tint, headerShown: false, tabBarButton: HapticTab, tabBarStyle: { paddingTop: 8, paddingBottom: bottomPadding, height: 64 + bottomPadding, backgroundColor: "#0B1826", borderTopColor: "#1C3548", borderTopWidth: 1 } }}>
      <Tabs.Screen name="index" options={{ title: t("home"), tabBarIcon: ({ color }) => <IconSymbol size={24} name="desktopcomputer" color={color} /> }} />
      <Tabs.Screen name="library" options={{ title: t("library"), tabBarIcon: ({ color }) => <IconSymbol size={24} name="gamecontroller.fill" color={color} /> }} />
      <Tabs.Screen name="settings" options={{ title: t("settings"), tabBarIcon: ({ color }) => <IconSymbol size={24} name="slider.horizontal.3" color={color} /> }} />
    </Tabs>
  );
}
