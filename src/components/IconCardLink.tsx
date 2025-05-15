import { Link } from "expo-router";
import { Text, Image, Pressable, Animated, StyleSheet } from "react-native";
import * as Haptics from "expo-haptics";
import { IconCardLinkProps } from "@/src/interfaces";
import { useRef } from "react";

export const IconCardLink = ({
  bgClass,
  icon,
  title,
  href,
}: IconCardLinkProps) => {
  // Animated values
  const scale = useRef(new Animated.Value(1)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const animateIn = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0.25,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateOut = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Link href={href} asChild>
      <Pressable
        onPressIn={animateIn}
        onPressOut={animateOut}
        style={{ width: "20%" }}
      >
        <Animated.View
          className={`justify-center items-center rounded-2xl ${bgClass} h-20 w-20 p-4`}
          style={{ transform: [{ scale }] }}
        >
          <Image source={icon} className="h-8 w-8" />
          {/* Overlay para oscurecer */}
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "black",
              opacity: overlayOpacity,
              borderRadius: 16, // mismo radio que el contenedor
            }}
          />
        </Animated.View>
        <Animated.Text
          className="font-sans text-gray-600 text-base text-center mt-2"
          style={{ transform: [{ scale }] }}
        >
          {title}
        </Animated.Text>
      </Pressable>
    </Link>
  );
};
