import React from "react";

import BusinessIcon from "@material-ui/icons/Business";
import DevicesIcon from "@material-ui/icons/Devices";
import PhoneIcon from "@material-ui/icons/Phone";
import DnsIcon from "@material-ui/icons/Dns";
import ReportIcon from "@material-ui/icons/Report";
import RingVolumeIcon from "@material-ui/icons/RingVolume";
import BuildIcon from "@material-ui/icons/Build";
import InfoIcon from "@material-ui/icons/Info";

export const ItemData = [
  {
    text: "Офисы",
    icon: <BusinessIcon />,
  },
  {
    text: "Оборудование",
    icon: <DevicesIcon />,
  },
  {
    text: "Phones",
    children: [
      { text: "Телефоны инфо" },
      { text: "Телефоны по ФИО" },
      { text: "Телефоны с переадресацией" },
    ],
    icon: <PhoneIcon />,
    active: false,
  },
  {
    text: "IP Planning",
    children: [{ text: "IPAM" }],
    icon: <DnsIcon />,
    active: false,
  },
  {
    text: "Reports",
    icon: <ReportIcon />,
  },
  {
    text: "Phones Reports",
    icon: <RingVolumeIcon />,
    children: [
      { text: "По моделям" },
      { text: "По кластерам" },
      { text: "По не используемым" },
      { text: "По Agent Licenses" },
    ],
    active: false,
  },
  {
    text: "Tools",
    icon: <BuildIcon />,
    children: [
      { text: "Поиск незарегестрированных телефонов" },
      { text: "CUCM Маршрутизация" },
      { text: "Testing CORS Requests" },
    ],
    active: false,
  },
  {
    text: "Справочники",
    icon: <InfoIcon />,
    children: [
      { text: "Рег. центры (mapping)" },
      { text: "Регионы" },
      { text: "Города" },
      { text: "Статусы офисов" },
      { text: "Оборудование" },
      { text: "Типы портов" },
      { text: "VRF" },
      { text: "NetWorks(Table)" },
      { text: "NetWorks(Tree)" },
      { text: "Логи Hardware" },
      { text: "Логи Phones" },
    ],
    active: false,
  },
];
