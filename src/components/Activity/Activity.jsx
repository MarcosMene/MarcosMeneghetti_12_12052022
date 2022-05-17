import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./activity.scss";
const data = [
  {
    name: "1",
    uv: 70,
    pv: 61,
    amt: 76,
  },
  {
    name: "2",
    uv: 70,
    pv: 70,
    amt: 67,
  },
  {
    name: "3",
    uv: 70,
    pv: 70,
    amt: 67,
  },
  {
    name: "4",
    uv: 70,
    pv: 70,
    amt: 67,
  },
  {
    name: "5",
    uv: 71,
    pv: 70,
    amt: 67,
  },
  {
    name: "6",
    uv: 69,
    pv: 70,
    amt: 67,
  },
  {
    name: "7",
    uv: 69,
    pv: 70,
    amt: 67,
  },
];

export default function Activity() {
  return (
    <ResponsiveContainer className="dailyActivity">
      <BarChart
        width="100%"
        height="100%"
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Legend width={200} verticalAlign="top" align="right" height={56} />

        <XAxis dataKey="name" scale="band" />
        <YAxis type="number" domain={["dataMin", "dataMax"]} />
        <Tooltip />

        <Bar dataKey="pv" fill="#000" barSize={8} radius={[5, 5, 0, 0]} />
        <Bar dataKey="uv" fill="#FF0101" barSize={8} radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
