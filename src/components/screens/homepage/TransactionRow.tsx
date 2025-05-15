import { Image, Text, View } from "react-native";

const arrowDownIconImage = require("@/assets/images/icons/arrow_down_icon.png");

export const TransactionRow = () => {
  return (
    <View className="flex-row justify-between items-center border-b border-gray-200 py-4">
      <View className="flex-row">
        <View className="bg-pastel-green rounded-full w-16 h-16 flex items-center justify-center">
          <Image source={arrowDownIconImage} className="w-6 h-6" />
        </View>
        <View className="w-4" />
        <View className="flex-col justify-around">
          <Text className="text-lg font-sans-bold">Paga quincenal</Text>
          <Text className="text-gray-500 text-lg font-sans-semibold">
            Banco
          </Text>
        </View>
      </View>
      <View className="flex items-center">
        <Text className="text-lafise-primary text-xl font-sans-semibold">
          C$7,500.00
        </Text>
      </View>
    </View>
  );
};
