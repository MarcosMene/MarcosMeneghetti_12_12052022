import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./activity.scss";
const data = [
  {
    name: "Page A",
    uv: 20,
    pv: 20,
    amt: 20,
  },
  {
    name: "Page B",
    uv: 20,
    pv: 21,
    amt: 22,
  },
  {
    name: "Page C",
    uv: 20,
    pv: 21,
    amt: 22,
  },
  {
    name: "Page D",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "Page E",
    uv: 19,
    pv: 28,
    amt: 21,
  },
  {
    name: "Page F",
    uv: 23,
    pv: 38,
    amt: 25,
  },
  {
    name: "Page G",
    uv: 34,
    pv: 43,
    amt: 21,
  },
];

export default function Activity() {
  return (
    <div className="dailyActivity">
      <div className="dailyActivity-title">
        <h2>Activité quotidienne</h2>
        <div className="dailyActivity-description">
          <div className="dailyActivity-text">
            <div className="dailyActivity-text-icon black"></div>
            <p>Poids (Kg)</p>
          </div>
          <div className="dailyActivity-text">
            <div className="dailyActivity-text-icon red"></div>
            <p>Calories brûlées (KCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer
        title="Durée moyenne des sessions"
        width="100%"
        height="100%"
      >
        <BarChart
          width="100%"
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          {/* <Legend
            width={300}
            verticalAlign="top"
            align="right"
            // height={56}
            iconType="circle"
            iconSize={10}
            itemWidth={100}
            itemHeight={20}
          /> */}

          <XAxis dataKey="name" scale="band" />
          <YAxis type="number" domain={data} />
          <Tooltip />

          <Bar
            dataKey="pv"
            fill="#282D30"
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
          <Bar dataKey="uv" fill="#FF0101" barSize={8} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
