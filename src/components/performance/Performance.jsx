import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Text,
  ResponsiveContainer,
} from "recharts";
import "./performance.scss";

//
function renderPolarAngleAxis({ payload, x, y, cx, cy }) {
  return (
    <Text
      verticalAnchor="middle"
      y={y + (y - cy) / 7}
      x={x + (x - (cx + 60)) / 2.5}
      style={{ fill: "rgba(255, 255, 255)" }}
    >
      {payload.value}
    </Text>
  );
}

export default function Performance({ performances }) {
  return (
    <div className="performance">
      <ResponsiveContainer
        className="performance"
        title="Intensité"
        width="100%"
        height="100%"
      >
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performances}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickline={false}
            stroke="#fff"
            cx="50%"
            cy="50%"
            tick={(props) => renderPolarAngleAxis(props)}
          />

          <Radar
            name="performance"
            dataKey="value"
            fill="#ff0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
