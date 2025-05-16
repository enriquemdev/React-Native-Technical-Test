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
    account,
    accountLoading,
    accountError,
    transactions,
    transactionsLoading,
    transactionsError,
    fetchAllData,
  } = useAccountStore();

  useEffect(() => {
    fetchAllData(process.env.EXPO_PUBLIC_ACCOUNT_ID as string);
  }, [fetchAllData]);

  return (
    <View className="flex-1 bg-[#FBFBFB]">
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <HeaderSection />

      <View className="flex-1 px-8">
        <QuickOperationsSection />

        {/* Starts transactions Section */}
        <View>
          <TransactionRow />
          <Text>{account?.balance}</Text>
        </View>
        {/*  Ends transactions Section */}
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
