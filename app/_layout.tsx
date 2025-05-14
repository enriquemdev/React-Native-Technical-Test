import { Stack } from "expo-router";
import "@/src/styles/globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="transfer-money" options={{ headerShown: false }} />
    </Stack>
  );
}
