import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeLayout() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setButtonStyleAsync("dark");
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}