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
    fill: "#FBFBFB",
  },
];

export default function Score() {
  const renderLegend = () => {
    // const {payload } = props
    return (
      <div className="radialBarLegend">
        <span>{data[0].uv}%</span>
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
          endAngle={220}
          backgroundColor="transparent"
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 2]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={300}
            background={{ fill: "#FF0101" }}
            Clockwise={false}
            dataKey="value"
            cornerRadius={10}
            circle
            cx="50%"
            cy="50%"
            r="80px"
          />

          <text
            x={30}
            y={33}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fontWeight={600}
          >
            Score
          </text>

          <Legend
            content={renderLegend}
            layout="horizontal"
            verticalAlign="middle"
            width={200}
            wrapperStyle={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "20px",
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
