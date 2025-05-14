import { View, Text } from "react-native";
import { Tabs, Stack } from "expo-router";

const _Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="confirm-transfer" options={{ headerShown: false }} />
      <Stack.Screen name="transfer-success" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _Layout;
