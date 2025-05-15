import { SafeAreaView } from "react-native-safe-area-context";

export const BottomNavBar = ({
  children,
  classNames = "",
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <SafeAreaView
      edges={["bottom"]}
      className={`absolute bottom-0 left-0 right-0 bg-white flex-row justify-around items-center ${classNames}`}
    >
      {children}
    </SafeAreaView>
  );
};
