import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

const TransferSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const { width: screenWidth } = Dimensions.get("window");

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-white px-5 pt-10 items-center relative">
      {/* Semicírculo de fondo con degradado */}
      <LinearGradient
        colors={["#EBF8F1", "rgba(235, 248, 241, 0)"]} // De #EBF8F1 a transparente
        start={{ x: 0.5, y: 1 }} // Comienza desde abajo
        end={{ x: 0.5, y: 0 }} // Termina arriba
        style={{
          position: "absolute",
          width: screenWidth * 2,
          height: 360,
          borderBottomLeftRadius: 1000,
          borderBottomRightRadius: 1000,
          top: -220,
          left: -screenWidth / 2,
          zIndex: 0,
        }}
      />

      {/* Confetti */}
      {showConfetti && (
        <ConfettiCannon
          count={20}
          origin={{ x: screenWidth / 2, y: 0 }}
          colors={["#33BA75"]}
          fadeOut
          fallSpeed={2500}
          explosionSpeed={300}
        />
      )}

      {/* Header */}
      <View className="items-center mt-16 mb-8 z-10">
        <View className="bg-[#33BA75] rounded-full p-5 mb-4">
          <Ionicons name="checkmark" size={48} color="#ffffff" />
        </View>
        <Text className="text-4xl font-bold text-black text-center">
          Envío con éxito
        </Text>
        <Text className="text-sm text-gray-500 mt-1 text-center">
          {new Date().toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          ,{" "}
          {new Date().toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>

      {/* Resumen */}
      <View className="w-full bg-white rounded-xl p-6 mb-8 z-10">
        <Text className="text-base font-semibold text-center mb-4">
          Resumen de tu envío
        </Text>

        <View className="mb-4 items-center">
          <Text className="text-sm text-gray-500 text-center">
            Total enviado
          </Text>
          <Text className="text-base font-medium text-black text-center">
            C$1,000
          </Text>
        </View>

        <View className="mb-4 items-center">
          <Text className="text-sm text-gray-500 text-center">
            Al número de cuenta
          </Text>
          <Text className="text-base font-medium text-black text-center">
            130492890
          </Text>
        </View>

        <View className="items-center">
          <Text className="text-sm text-gray-500 text-center">
            Cuenta utilizada para el envío
          </Text>
          <Text className="text-base font-medium text-black text-center">
            0234567645
          </Text>
        </View>
      </View>

      {/* Botón */}
      <TouchableOpacity className="bg-[#008B6A] py-4 rounded-full w-full max-w-md z-10">
        <Text className="text-white font-bold text-base text-center">
          Volver al inicio
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransferSuccess;
