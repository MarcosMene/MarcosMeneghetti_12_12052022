import React from "react";
import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./score.scss";
const data = [
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#FF0101",
  },
];

export default function Score() {
  const renderLegend = () => {
    // const {payload } = props
    return (
      <div className="radialBarLegend">
        <span>tred%</span>
        <p>de votre objectif</p>
      </div>
    );
  };

  return (
    <div className="score">
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={360}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 2]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={300}
            background={{ fill: "#FF0101", fillOpacity: 0.5 }}
            counterClockwise
            dataKey="value"
            cornerRadius={10}
            fill="#FF0101"
          />

          <text
            x={30}
            y={33}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Score
          </text>

          <Legend
            content={renderLegend}
            layout="horizontal"
            verticalAlign="middle"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
