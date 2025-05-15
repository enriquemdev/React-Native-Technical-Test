import { Image, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { NavigationTabProps } from "@/src/interfaces";

export const NavigationTab = ({
  label,
  href,
  icon,
  textClasses = "",
}: NavigationTabProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(href)}
      className="flex-1 items-center p-4 "
      // android_ripple={{ color: '#ccc' }}
    >
      <Image source={icon} className="h-8 w-8 mb-4" />
      <Text className={`${textClasses}text-gray-600 text-xs font-sans`}>
        {label}
      </Text>
    </Pressable>
  );
};
