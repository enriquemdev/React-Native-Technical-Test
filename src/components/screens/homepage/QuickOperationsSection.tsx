import { Text, View } from "react-native";
import { OperationsData } from "@/src/data";
import { IconCardLink } from "@/src/components/common";
export const QuickOperationsSection = () => {
  return (
    <View className="rounded-2xl bg-white p-6 shadow-sm shadow-gray-300 mb-4">
      <Text className="text-2xl font-sans-semibold mb-3">
        Operaciones rápidas
      </Text>
      <View className="flex-row justify-between gap-x-6">
        {OperationsData.map((operation, index) => (
          <IconCardLink key={operation.title} {...operation} />
        ))}
      </View>
    </View>
  );
};
