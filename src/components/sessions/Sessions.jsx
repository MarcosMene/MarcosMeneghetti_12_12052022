import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./sessions.scss";
const data = [
  {
    name: "L",
    uv: 400,
    pv: 240,
    amt: 200,
  },
  {
    name: "M",
    uv: 300,
    pv: 198,
    amt: 220,
  },
  {
    name: "M",
    uv: 200,
    pv: 980,
    amt: 220,
  },
  {
    name: "J",
    uv: 280,
    pv: 308,
    amt: 200,
  },
  {
    name: "V",
    uv: 190,
    pv: 480,
    amt: 281,
  },
  {
    name: "S",
    uv: 230,
    pv: 300,
    amt: 200,
  },
  {
    name: "D",
    uv: 340,
    pv: 400,
    amt: 200,
  },
];

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{payload[0].value}</p>
      </div>
    );
  }

  return null;
}

export default function Sessions() {
  return (
    <div className="sessions">
      <div className="sessions-title">
        <h2>
          Durée moyenne des <br />
          sessions
        </h2>
      </div>
      <ResponsiveContainer className="sessions">
        <AreaChart
          width={530}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" stroke="#FFF" />
          {/* <YAxis /> */}
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="uv" stroke="#FFF" fill="#FF0101" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
