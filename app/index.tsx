import { Link } from "expo-router";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// Images
const backgroundImage = require("@/assets/images/home-bg-img.jpg");
const userImage = require("@/assets/images/user.png");
const logoLafiseImage = require("@/assets/images/logo_lafise.png");

export default function Index() {
  return (
    <View className="flex-1">
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/* Upper section with background image and green overlay */}
      <View className="relative h-[36%]">
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
              <Text className="text-white text-xl font-sans">Hola, Josué</Text>
            </View>

            <Image source={userImage} className="w-10 h-10 rounded-full" />
          </View>

          <Text className="text-white text-2xl font-sans mb-5">
            Mis productos
          </Text>

          <View className="bg-white rounded-xl p-4 shadow-md">
            <Text className="text-lg font-sans">Cuenta de ahorro</Text>
            <Text className="text-gray-600 text-lg">1134948394</Text>
            <View className="flex-row justify-between items-center mt-2">
              <Text className="text-lg font-bold font-sans">
                Saldo disponible
              </Text>
              <Text className="text-light-green text-xs">📩</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800 mt-1">
              NIO 7,500.00
            </Text>
          </View>
        </SafeAreaView>
      </View>

      <View className="flex-1 bg-gray-bg p-4">
        <Text className="text-gray-700 text-base font-bold mb-3">
          Operaciones rápidas
        </Text>
        <View className="flex-row justify-between flex-wrap">
          {[
            "Transferir Dinero",
            "Pagar Servicio",
            "Recargar celular",
            "Retiro sin tarjeta",
          ].map((option, index) => (
            <TouchableOpacity
              key={index}
              className="w-[48%] bg-gray-200 rounded-lg p-3 mb-3 items-center"
            >
              <Text className="text-gray-600 text-xs">Icon {option}</Text>
              <Text className="text-gray-800 text-sm">{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-row justify-between items-center bg-white rounded-lg p-4 mt-5">
          <View>
            <Text className="text-light-green text-xs">↓</Text>
            <Text className="text-gray-800 text-sm font-bold">
              Paga quincenal Banco
            </Text>
          </View>
          <Text className="text-gray-800 text-sm">C$7,500.00</Text>
        </View>

        <View className="flex-row justify-around items-center bg-white p-2 border-t border-gray-200 mt-5">
          <Link href="/" className="flex items-center">
            <Text className="text-gray-600">🏠</Text>
            <Text className="text-xs">Inicio</Text>
          </Link>
          <Link href="/operations" className="flex items-center">
            <Text className="text-gray-600">↔️</Text>
            <Text className="text-xs">Operaciones</Text>
          </Link>
          <Link href="/products" className="flex items-center">
            <Text className="text-gray-600">💳</Text>
            <Text className="text-xs">Productos</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
