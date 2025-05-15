import { ImageSourcePropType } from "react-native";

export interface NavigationTabProps {
  label: string;
  href: string;
  icon: ImageSourcePropType;
  isActive: boolean;
}
