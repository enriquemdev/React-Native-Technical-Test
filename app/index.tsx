import { Link } from "expo-router";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { IconCardLink } from "@/src/components/IconCardLink";
import { IconCardLinkProps } from "@/src/interfaces";

// Images
const backgroundImage = require("@/assets/images/home-bg-img.jpg");
const userImage = require("@/assets/images/user.png");
const logoLafiseImage = require("@/assets/images/logo_lafise.png");
const sendIconImage = require("@/assets/images/icons/send_icon.png");

const transferIconImage = require("@/assets/images/icons/transfer_icon.png");
const lightBulgIconImage = require("@/assets/images/icons/lightbulb_icon.png");
const phoneIconImage = require("@/assets/images/icons/phone_icon.png");
const moneyWithdrawalIconImage = require("@/assets/images/icons/money_withdrawal_icon.png");

const arrowDownIconImage = require("@/assets/images/icons/arrow_down_icon.png");

// Data
const operations: IconCardLinkProps[] = [
  {
    bgClass: "bg-pastel-green",
    icon: transferIconImage,
    title: "Transferir Dinero",
    href: "/transfer-money",
  },
  {
    bgClass: "bg-pastel-orange",
    icon: lightBulgIconImage,
    title: "Pagar Servicio",
    href: "/",
  },
  {
    bgClass: "bg-pastel-blue",
    icon: phoneIconImage,
    title: "Recargar celular",
    href: "/",
  },
  {
    bgClass: "bg-pastel-purple",
    icon: moneyWithdrawalIconImage,
    title: "Retiro sin tarjeta",
    href: "/",
  },
];

export default function Index() {
  return (
    <View className="flex-1 bg-[#FBFBFB]">
      <StatusBar style="light" translucent backgroundColor="transparent" />
      {/* Upper section with background imarge and green overlay */}
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
                <Text className="text-lg font-sans-medium">
                  Cuenta de ahorro
                </Text>
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

      {/* Starts Area after the header */}
      <View className="flex-1 px-8">
        <View className="rounded-2xl bg-white p-6 shadow-sm shadow-gray-300 mb-4">
          <Text className="text-2xl font-sans-semibold mb-3">
            Operaciones rápidas
          </Text>
          <View className="flex-row justify-between gap-x-6">
            {operations.map((operation, index) => (
              <IconCardLink key={operation.title} {...operation} />
            ))}
          </View>
        </View>

        {/* Starts third area */}
        <View>
          <View className="flex-row justify-between items-center border-b border-gray-200 py-4">
            <View className="flex-row">
              <View className="bg-pastel-green rounded-full w-16 h-16 flex items-center justify-center">
                <Image source={arrowDownIconImage} className="w-6 h-6" />
              </View>
              <View className="w-4" />
              <View className="flex-col justify-around">
                <Text className="text-lg font-sans-bold">Paga quincenal</Text>
                <Text className="text-gray-600 text-lg font-sans-semibold">
                  Banco
                </Text>
              </View>
            </View>
            <View className="flex items-center">
              <Text className="text-gray-800 text-sm">C$7,500.00</Text>
            </View>
          </View>
        </View>
        {/*  Ends third area */}

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
      {/* Ends area after the header */}
    </View>
  );
}
