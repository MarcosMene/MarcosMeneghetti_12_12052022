import React from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./sessions.scss";

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {payload[0].value}
          <span>min</span>
        </p>
      </div>
    );
  }
  return null;
}

export default function Sessions({ session }) {
  return (
    <div className="sessions">
      <div className="sessions-title">
        <h2>
          Durée moyenne des <br />
          sessions
        </h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          // width={200}
          // height={400}
          outerRadius={90}
          data={session}
          margin={{
            top: 30,
            left: 5,
            right: 5,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="day"
            stroke="#fff"
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide={true} domain={["dataMin-10", "dataMax+10"]} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth="3"
            fill="#FF0D0D"
            activeDot={{ stroke: "#FF3333", strokeWidth: 6, r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
