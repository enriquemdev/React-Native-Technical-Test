import React, { memo } from "react";
import { Text } from "react-native";

const formatCurrency = (
  value: number | null,
  locale: string = "en-US",
  currency: string = "USD",
): string => {
  if (value === null || isNaN(value)) return "Monto Inválido";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

interface CurrencyFormatterProps {
  value: number | null;
  locale?: string;
  currency: string;
  className?: string;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({
  value,
  locale = "en-US",
  currency,
  className,
}) => {
  const formattedValue = React.useMemo(
    () => formatCurrency(value, locale, currency),
    [value, locale, currency],
  );

  return <Text className={className}>{formattedValue}</Text>;
};

export default memo(CurrencyFormatter);
