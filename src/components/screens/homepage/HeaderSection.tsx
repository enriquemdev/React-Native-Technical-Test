import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Account } from "@/src/interfaces";
import { AccountCard } from "@/src/components/screens/homepage/AccountCard";
import { useAccountStore } from "@/src/store";
import { useEffect } from "react";

// Images
const backgroundImage = require("@/assets/images/home-bg-img.jpg");
const userImage = require("@/assets/images/user.png");
const logoLafiseImage = require("@/assets/images/logo_lafise.png");

export const HeaderSection = () => {
  const { account, accountLoading, accountError, fetchAccountData } =
    useAccountStore();

  useEffect(() => {
    fetchAccountData(process.env.EXPO_PUBLIC_ACCOUNT_ID as string);
  }, [fetchAccountData]);

  return (
    <View className="relative h-[36%] mb-16">
      <View className="absolute inset-0 bg-lafise-primary" />
      <Image
        source={backgroundImage}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
        style={{ mixBlendMode: "luminosity", opacity: 0.4 }}
      />
      <View className="absolute inset-0 bg-black/30" />

      {/* Safe Area View to avoid content overlapping with the status bar'*/}
      <SafeAreaView className="flex-1 py-6 px-8">
        <View className="flex-row justify-between items-center mb-10">
          <View className="flex-row items-center gap-2">
            <Image source={logoLafiseImage} className="w-10 h-10" />
            <Text className="text-white text-xl font-sans-medium">
              Hola, Josué
            </Text>
          </View>

          <Image source={userImage} className="w-10 h-10 rounded-full" />
        </View>

        <Text className="text-white text-2xl font-sans-medium mb-10">
          Mis productos
        </Text>

        {accountLoading ? (
          <Text>Cargando cuenta...</Text>
        ) : accountError ? (
          <Text className="text-red-500">{accountError}</Text>
        ) : account ? (
          <AccountCard account={account} />
        ) : null}
      </SafeAreaView>
    </View>
  );
};
