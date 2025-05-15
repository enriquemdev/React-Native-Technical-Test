import { ImageSourcePropType } from "react-native";

export interface IconCardLinkProps {
  bgClass: string;
  icon: ImageSourcePropType;
  title: string;
  href: string | null;
}
