import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "platform", headerName: "Платформа", width: 175 },
  { field: "maker", headerName: "Производитель", width: 175 },
  { field: "allDevices", headerName: "Всего устройств", width: 175 },
  { field: "activeDivices", headerName: "Активных", width: 175 },
  { field: "notDevices", headerName: "Активных (not InUse)", width: 175 },
  { field: "notActiveDevices", headerName: "Неактивных", width: 175 },
];

const rows = [
  {
    id: 1,
    platform: "A",
    maker: "E",
    allDevices: 11,
    activeDivices: 355,
    notDevices: 3125,
    notActiveDevices: 55,
  },
  {
    id: 13,
    platform: "B",
    maker: "F",
    allDevices: 35,
    activeDivices: 2635,
    notDevices: 31,
    notActiveDevices: 1,
  },
  {
    id: 1125,
    platform: "CA3",
    maker: "G",
    allDevices: 1,
    activeDivices: 35,
    notDevices: 63,
    notActiveDevices: 12,
  },
  {
    id: 15,
    platform: "DA",
    maker: "HF",
    allDevices: 233,
    activeDivices: 1,
    notDevices: 123,
    notActiveDevices: 2,
  },
  ,
  {
    id: 1512,
    platform: "CDA",
    maker: "GD",
    allDevices: 315,
    activeDivices: 521,
    notDevices: 62,
    notActiveDevices: 1251,
  },
  {
    id: 251,
    platform: "D",
    maker: "H",
    allDevices: 22,
    activeDivices: 2125,
    notDevices: 212,
    notActiveDevices: 1,
  },
  ,
  {
    id: 476,
    platform: "C",
    maker: "GA",
    allDevices: 35,
    activeDivices: 35,
    notDevices: 35,
    notActiveDevices: 22,
  },
  {
    id: 12347,
    platform: "DDD",
    maker: "AAH",
    allDevices: 3123,
    activeDivices: 35,
    notDevices: 35,
    notActiveDevices: 35,
  },
  ,
  {
    id: 22,
    platform: "CX",
    maker: "SG",
    allDevices: 35,
    activeDivices: 35,
    notDevices: 35,
    notActiveDevices: 35,
  },
  {
    id: 125,
    platform: "D1",
    maker: "H5",
    allDevices: 35,
    activeDivices: 35,
    notDevices: 35,
    notActiveDevices: 35,
  },
  ,
  {
    id: 111,
    platform: "DS",
    maker: "AH",
    allDevices: 35,
    activeDivices: 35,
    notDevices: 35,
    notActiveDevices: 35,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} autoPageSize={true} />
    </div>
  );
}
