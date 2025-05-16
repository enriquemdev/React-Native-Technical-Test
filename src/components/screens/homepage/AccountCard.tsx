import { Image, Text, View } from "react-native";
import { Account } from "@/src/interfaces";
import NumberFormatter from "@/src/components/common/NumberFormatter";

const sendIconImage = require("@/assets/images/icons/send_icon.png");

export const AccountCard = ({ account }: { account: Account }) => {
  return (
    <View className="bg-white rounded-2xl p-6 shadow-sm shadow-gray-300">
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-lg font-sans-medium">{account?.alias}</Text>
          <Text className="text-gray-500 text-lg">
            {account?.account_number}
          </Text>
        </View>
        <Image source={sendIconImage} className="w-12 h-12" />
      </View>

      <Text className="text-base text-gray-500 font-sans">
        Saldo disponible
      </Text>
      <View className="flex-row items-start gap-3 flex-wrap">
        <Text className="text-[1.1rem] font-sans-medium">
          {account?.currency}
        </Text>
        <NumberFormatter
          classNames="text-3xl font-sans-semibold"
          value={account?.balance}
        />
      </View>
    </View>
  );
};
