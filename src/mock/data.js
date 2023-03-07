import usdIcon from "../assets/icons/usa.png";
import europaIcon from "../assets/icons/europa.png";
import ukIcon from "../assets/icons/uk.png";
import australiaIcon from "../assets/icons/australia.png";
import argentinaIcon from "../assets/icons/argentina.png";
import armeniaIcon from "../assets/icons/armenia.png";

export const menuData = [
  {
    title: "Profile",
    categories: [
      { id: 1, path: "/", icon: "", title: "Settings" },
      { id: 2, path: "/", icon: "", title: "Security" },
      { id: 3, path: "/", icon: "", title: "Support" },
    ],
  },
  {
    title: "Services",
    categories: [
      { id: 1, path: "/", icon: "", title: "Favorite Contacts" },
      { id: 2, path: "/", icon: "", title: "Staking" },
      { id: 3, path: "/", icon: "", title: "NFTs" },
      { id: 4, path: "/", icon: "", title: "Loans" },
      { id: 5, path: "/", icon: "", title: "Wallet Connect" },
    ],
  },
];

export const currencyData = [
  {
    id: 1,
    icon: usdIcon,
    currency: "USD",
    currencyName: "United States Dollar",
  },
  { id: 2, icon: europaIcon, currency: "EUR", currencyName: "Euro" },
  { id: 3, icon: ukIcon, currency: "GBP", currencyName: "British Pound" },
  {
    id: 4,
    icon: australiaIcon,
    currency: "AUD",
    currencyName: "Australian Dollar",
  },
  {
    id: 5,
    icon: argentinaIcon,
    currency: "ARS",
    currencyName: "Argentine peso",
  },
  { id: 6, icon: armeniaIcon, currency: "AMD", currencyName: "Armenian dram" },
  { id: 7, icon: armeniaIcon, currency: "AMD", currencyName: "Armenian dram" },
];

export const historyData = [
  {
    id: 1,
    type: "received",
    title: "Received",
    created_at: {
      day: "30 September, 2022",
      time: "4:11 PM",
    },
    operation_currency: {
      from: "BTC",
      to: "USDT",
    },
    operation_network: "0.0003 BTC ($5.67)",
    amount: {
      from: "+ 60.457150 USDT",
      to: "- 0.2542 BTC",
    },
    operation_id: "4141ffa5g51515",
  },
  {
    id: 2,
    type: "exchanged",
    title: "Exchanged",
    created_at: {
      day: "30 September, 2022",
      time: "4:11 PM",
    },
    operation_currency: {
      from: "BTC",
      to: "USDT",
    },
    operation_network: "0.0003 BTC ($5.67)",
    amount: {
      from: "+ 60.457150 USDT",
      to: "- 0.2542 BTC",
    },
    operation_id: "4141ffa5g51515",
  },
];
