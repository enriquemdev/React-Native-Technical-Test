import { IconCardLinkProps } from "@/src/interfaces";

const transferIconImage = require("@/assets/images/icons/transfer_icon.png");
const lightBulgIconImage = require("@/assets/images/icons/lightbulb_icon.png");
const phoneIconImage = require("@/assets/images/icons/phone_icon.png");
const moneyWithdrawalIconImage = require("@/assets/images/icons/money_withdrawal_icon.png");

export const OperationsData: IconCardLinkProps[] = [
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
