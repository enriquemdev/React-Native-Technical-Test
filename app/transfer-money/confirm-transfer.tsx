import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useAccountStore } from "@/src/store/accountStore";
import { BottomNavBar } from "@/src/components/common";

const phoneIconImage = require("@/assets/images/icons/phone_icon.png");

const RoundedButton = ({
  title,
  buttonClasses = "",
  textClasses = "",
  disabled = false,
  onPress,
}) => {
  const baseStyle = `flex-1 py-6 rounded-full text-center text-sm font-semibold ${
    disabled ? "bg-gray-200" : buttonClasses
  }`;

  const textStyle = `text-center font-sans-bold text-lg ${disabled ? "text-gray-400" : textClasses}`;

  return (
    <Pressable
      className={baseStyle}
      onPress={onPress}
      disabled={disabled}
      accessibilityState={{ disabled }}
    >
      <Text className={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default function ConfirmTransferScreen() {
  const { account } = useAccountStore();
  const { account: destinationAccount, amount } = useLocalSearchParams();

  const handleConfirm = () => {
    router.push("/transfer-money/transfer-success");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 py-3 mb-6">
        <View className="absolute left-0 top-0 pt-3 ml-6">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={26} />
          </TouchableOpacity>
        </View>
        <Text className="text-lg font-semibold text-center">
          Confirma tu envío
        </Text>
      </View>

      {/* Content */}
      <View className="px-8 flex-1 items-center">
        <View
          className={`justify-center items-center bg-pastel-blue h-28 w-28 p-4 rounded-full mt-10 mb-8`}
        >
          <Image source={phoneIconImage} className="h-12 w-12" />
        </View>

        <Text className="text-gray-500 text-base mb-1">Total a enviar</Text>
        <Text className="text-5xl font-bold mb-10">C${amount}</Text>

        <View className="w-full mb-4 border-b border-gray-200 pb-4">
          <Text className="text-sm text-gray-500 mb-1">
            Al número de cuenta
          </Text>
          <Text className="text-base font-medium text-blue-900">
            {destinationAccount}
          </Text>
        </View>

        <View className="w-full border-b border-gray-200 pb-4">
          <Text className="text-sm text-gray-500 mb-1">
            Cuenta a utilizar para el envío
          </Text>
          <Text className="text-base font-medium text-blue-900">
            {account?.account_number || "N/A"}
          </Text>
        </View>
      </View>

      {/* Bottom button */}
      <BottomNavBar classNames="pt-4 px-8 border-t border-gray-200">
        <RoundedButton
          title="Confirmar el envío"
          buttonClasses="bg-lafise-primary"
          textClasses="text-white"
          onPress={handleConfirm}
        />
      </BottomNavBar>
    </SafeAreaView>
  );
}
