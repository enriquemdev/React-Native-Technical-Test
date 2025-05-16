import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { BottomNavBar } from "@/src/components/common";
import { useAccountStore } from "@/src/store/accountStore";
import { router } from "expo-router";

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

export default function TransferScreen() {
  const { account } = useAccountStore();

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { accountNumber: "", amount: "" },
  });

  const watchAmount = watch("amount");

  // Determine button enabled state: amount > 0 && <= balance && accountNumber not empty
  const amountValue = parseFloat(watchAmount) || 0;
  const isAmountValid =
    amountValue > 0 && account && amountValue <= account.balance;

  const onSubmit = (data) => {
    if (isAmountValid) {
      router.push(
        `/transfer-money/confirm-transfer?account=${data.accountNumber}&amount=${data.amount}`,
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <View className="px-4 py-3 mb-8">
          <View className="absolute left-0 top-0 pt-3 ml-6">
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={26} />
            </TouchableOpacity>
          </View>
          <Text className="text-lg font-semibold text-center">
            Transferir dinero
          </Text>
        </View>

        {/* Content */}
        <View className="px-4 flex-1">
          <Text className="font-sans-semibold mb-10 text-center text-2xl">
            ¿A quién le enviaras dinero hoy?
          </Text>

          {/* Número de Cuenta Input */}
          <View className="mb-4 py-3 px-4">
            <Text className="text-lg font-sans-semibold mb-2">
              Ingresa el número de cuenta
            </Text>
            <Controller
              control={control}
              name="accountNumber"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className="h-20 border border-gray-300 rounded-xl px-4 text-xl font-sans-semibold"
                  placeholder="N. de cuenta"
                  keyboardType="number-pad"
                  placeholderTextColor="#A1A1AA"
                  includeFontPadding={false}
                  textAlignVertical="center"
                  returnKeyType="done"
                  onSubmitEditing={Keyboard.dismiss}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>

          {/* Monto Input */}
          <View className="py-3 px-4">
            <Text className="text-lg font-sans-semibold mb-2">
              ¿Cuánto dinero le enviarás?
            </Text>
            <Controller
              control={control}
              name="amount"
              rules={{
                required: true,
                validate: (val) => {
                  const num = parseFloat(val);
                  return num > 0 && account && num <= account.balance;
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className="h-20 border border-gray-300 rounded-xl px-4 text-xl font-sans-semibold"
                  placeholder="C$500"
                  keyboardType="numeric"
                  placeholderTextColor="#A1A1AA"
                  includeFontPadding={false}
                  textAlignVertical="center"
                  returnKeyType="done"
                  onSubmitEditing={Keyboard.dismiss}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        </View>

        {/* Bottom Navigation Bar with Button */}
        <BottomNavBar classNames="pt-4 px-8 border-2 border-gray-200">
          <RoundedButton
            title="Enviar"
            buttonClasses="bg-lafise-primary"
            textClasses="text-white"
            disabled={!isValid || !isAmountValid}
            onPress={handleSubmit(onSubmit)}
          />
        </BottomNavBar>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
