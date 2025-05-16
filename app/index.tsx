import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BottomNavBar } from "@/src/components/common";
import {
  NavigationTab,
  HeaderSection,
  QuickOperationsSection,
  TransactionRow,
} from "@/src/components/screens";
import { NavigationTabProps } from "@/src/interfaces";
import { NavigationTabsData } from "@/src/data";
import { useAccountStore } from "@/src/store";
import { useEffect } from "react";

export default function Index() {
  const {
    transactions,
    transactionsLoading,
    transactionsError,
    fetchTransactionsData,
  } = useAccountStore();

  useEffect(() => {
    fetchTransactionsData(process.env.EXPO_PUBLIC_ACCOUNT_ID as string);
  }, [fetchTransactionsData]);

  return (
    <View className="flex-1 bg-[#FBFBFB]">
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <HeaderSection />

      <View className="flex-1 px-8">
        <QuickOperationsSection />

        <View>
          {transactionsLoading ? (
            <Text>Cargando transacciones...</Text>
          ) : transactionsError ? (
            <Text className="text-red-500">{transactionsError}</Text>
          ) : transactions.length > 0 ? (
            <View>
              {transactions.map((tx) => (
                <TransactionRow key={tx.transaction_number} transaction={tx} />
              ))}
            </View>
          ) : (
            <Text>No hay transacciones disponibles</Text>
          )}
        </View>
      </View>

      {/* Bottom Navigation Section */}
      <BottomNavBar>
        {NavigationTabsData.map((tab: NavigationTabProps) => (
          <NavigationTab {...tab} key={tab.label} />
        ))}
      </BottomNavBar>
    </View>
  );
}
