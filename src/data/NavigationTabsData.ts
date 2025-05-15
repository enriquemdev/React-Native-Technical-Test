import { NavigationTabProps } from "@/src/interfaces";

const homeIconImage = require("@/assets/images/icons/home_icon.png");
const arrowsIconImage = require("@/assets/images/icons/arrows_icon.png");
const creditCardIconImage = require("@/assets/images/icons/credit_card_icon.png");

export const NavigationTabsData: NavigationTabProps[] = [
  {
    label: "Inicio",
    href: "/",
    icon: homeIconImage,
    isActive: true,
  },
  {
    label: "Operaciones",
    href: "/",
    icon: arrowsIconImage,
    isActive: false,
  },
  { label: "Productos", href: "/", icon: creditCardIconImage, isActive: false },
];
