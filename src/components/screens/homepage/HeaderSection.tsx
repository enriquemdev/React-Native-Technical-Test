import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Images
const backgroundImage = require("@/assets/images/home-bg-img.jpg");
const userImage = require("@/assets/images/user.png");
const logoLafiseImage = require("@/assets/images/logo_lafise.png");
const sendIconImage = require("@/assets/images/icons/send_icon.png");

export const HeaderSection = () => {
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

        <View className="bg-white rounded-2xl p-6 shadow-sm shadow-gray-300">
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-lg font-sans-medium">Cuenta de ahorro</Text>
              <Text className="text-gray-500 text-lg">1134948394</Text>
            </View>
            <Image source={sendIconImage} className="w-12 h-12" />
          </View>

          <Text className="text-base text-gray-500 font-sans">
            Saldo disponible
          </Text>
          <View className="flex-row items-start gap-3 flex-wrap">
            <Text className="text-[1.1rem] font-sans-medium">NIO</Text>
            <Text className="text-3xl font-sans-semibold">7,500.00</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
