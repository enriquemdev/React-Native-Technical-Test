import { Image, Text, View } from "react-native";
import { Transaction } from "@/src/interfaces";
import CurrencyFormatter from "@/src/components/common/CurrencyFormatter";

const arrowDownIconImage = require("@/assets/images/icons/arrow_down_icon.png");

export const TransactionRow = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  return (
    <View className="flex-row justify-between items-center border-b border-gray-200 py-4">
      <View className="flex-row">
        <View className="bg-pastel-green rounded-full w-16 h-16 flex items-center justify-center">
          <Image source={arrowDownIconImage} className="w-6 h-6" />
        </View>
        <View className="w-4" />
        <View className="flex-col justify-around">
          <Text className="text-lg font-sans-bold">
            {transaction?.description}
          </Text>
          <Text className="text-gray-500 text-lg font-sans-semibold">
            {transaction?.bank_description}
          </Text>
        </View>
      </View>
      <View className="flex items-center">
        <CurrencyFormatter
          className="text-lafise-primary text-xl font-sans-semibold"
          currency={transaction?.amount?.currency}
          value={transaction?.amount?.value}
        />
      </View>
    </View>
  );
};
