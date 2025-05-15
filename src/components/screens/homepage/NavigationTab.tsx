import { Image, Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
import { NavigationTabProps } from "@/src/interfaces";

export const NavigationTab = ({ label, href, icon }: NavigationTabProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(href)}
      className="flex-1 items-center py-2"
      // android_ripple={{ color: '#ccc' }}
    >
      <Image source={icon} className="w-6 h-6 mb-1" />
      <Text className="text-gray-600 text-xs">{label}</Text>
    </Pressable>
  );
};
