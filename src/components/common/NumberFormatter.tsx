import React, { memo } from "react";
import { Text } from "react-native";

// Utility function to format number with commas and 2 decimals
const formatNumber = (
  value: number | null,
  locale: string = "en-US",
): string => {
  if (value === null || isNaN(value)) return "Monto Inválido";
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Props interface for the component
interface NumberFormatterProps {
  value: number | null;
  locale?: string;
  classNames?: string;
}

// React Native component to display formatted number
const NumberFormatter: React.FC<NumberFormatterProps> = ({
  value,
  locale = "en-US",
  classNames,
}) => {
  const formattedValue = React.useMemo(
    () => formatNumber(value, locale),
    [value, locale],
  );

  return <Text className={classNames}>{formattedValue}</Text>;
};

export default memo(NumberFormatter);
